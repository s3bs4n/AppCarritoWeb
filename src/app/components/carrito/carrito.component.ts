import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/json.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

interface Producto {
    id: number;
    nombre: string;
    categoria: string;
    precio: number;
    imagen: string;
}

interface CarritoProducto extends Producto {
    cantidad: number;
}

@Component({
    selector: 'app-carrito',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './carrito.component.html',
    styleUrl: './carrito.component.css',
    providers: [JsonService]
})

export class CarritoComponent implements OnInit {
  productos: Producto[] = [];
  articulosCarrito: CarritoProducto[] = [];

  constructor(private jsonService: JsonService, private router: Router) {}

  ngOnInit(): void {
    this.jsonService.getProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
      },
      error => {
        console.error('Error cargando productos:', error);
      }
    );

    this.articulosCarrito = this.obtenerCarritoDeLocalStorage();
    this.carritoHTML();
  }

  agregarProducto(producto: Producto): void {
    const productoEnCarrito = this.articulosCarrito.find(item => item.id === producto.id);
    
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      const nuevoProducto: CarritoProducto = { ...producto, cantidad: 1 };
      this.articulosCarrito.push(nuevoProducto);
    }

    this.carritoHTML();
  }

  eliminarProducto(id: number): void {
    this.articulosCarrito = this.articulosCarrito.filter(producto => producto.id !== id);
    this.carritoHTML();
  }

  carritoHTML(): void {
    this.vaciarCarritoHTML();
    this.guardarCarritoEnLocalStorage();
  }

  vaciarCarrito(): void {
    this.articulosCarrito = [];
    this.carritoHTML();
  }

  vaciarCarritoHTML(): void {
    // El tbody se maneja automáticamente con Angular
  }

  obtenerCarritoDeLocalStorage(): CarritoProducto[] {
    if (this.isLocalStorageAvailable()) {
      const carrito = localStorage.getItem('articulosCarrito');
      return carrito ? JSON.parse(carrito) : [];
    }
    return [];
  }

  guardarCarritoEnLocalStorage(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('articulosCarrito', JSON.stringify(this.articulosCarrito));
    }
  }

  irAPagar(): void {
    this.guardarCarritoEnLocalStorage();
    this.router.navigate(['/lista-productos']);
  }

  salir(): void {
    this.router.navigate(['/login']);
  }

  formatearPrecio(precio: number): string {
    return '$' + precio.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__localStorageTest__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}