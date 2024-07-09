import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonService } from '../../services/json.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
  providers: [JsonService]
})
export class AdminProductsComponent implements OnInit {

  productos: any[] = [];
  nombre: string = '';
  categoria: string = '';
  precio: number | null = null;
  imagen: string = '';

  constructor(private jsonService: JsonService) {}

  ngOnInit(): void {
    this.jsonService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  eliminar(producto: any): void {
    const index = this.productos.findIndex((elemento: any) => elemento.id === producto.id);
    
    if (index !== -1) {
      this.productos.splice(index, 1);
      this.jsonService.MetodoProductos(this.productos);
    } else {
      window.alert('El elemento de la lista no existe');
    }
  }

  addProduct(): void {
    const newProduct = {
      id: this.productos.length > 0 ? Math.max(...this.productos.map((p: any) => p.id)) + 1 : 1,
      nombre: this.nombre,
      categoria: this.categoria,
      precio: this.precio,
      imagen: this.imagen
    };
    this.productos.push(newProduct);
    this.jsonService.MetodoProductos(this.productos);
  }

  submitForm(): void {
    if (this.nombre && this.categoria && this.precio !== null && this.imagen) {
      this.addProduct();
      this.nombre = '';
      this.categoria = '';
      this.precio = null;
      this.imagen = '';
    } else {
      window.alert('Por favor, complete todos los campos del formulario');
    }
  }
}
