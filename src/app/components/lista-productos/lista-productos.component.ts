import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface ProductoCarrito {
  imagen: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})

export class ListaProductosComponent implements OnInit {
  productosCarrito: ProductoCarrito[] = [];
  precioTotal: number = 0;

  ngOnInit(): void {
    if (this.isLocalStorageAvailable()) {
      this.cargarProductosCarrito();
    } else {
      console.error('localStorage no está disponible');
    }
  }

  isLocalStorageAvailable(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  cargarProductosCarrito(): void {
    const productosCarrito = JSON.parse(localStorage.getItem('articulosCarrito') || '[]');
    this.productosCarrito = productosCarrito.map((producto: any) => {
      // const precioNumerico = parseFloat(producto.precio.replace(/[\$,\.]/g, ''));
      return {
        imagen: producto.imagen,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: producto.cantidad
      };
    });

    this.calcularPrecioTotal();
  }

  calcularPrecioTotal(): void {
    this.precioTotal = this.productosCarrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  }
}
