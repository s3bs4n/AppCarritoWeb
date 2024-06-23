// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// interface CarritoProducto {
//   imagen: string;
//   titulo: string;
//   precio: string;
//   id: string;
//   cantidad: number;
// }

// @Component({
//   selector: 'app-lista-productos',
//   standalone: true,
//   imports: [],
//   templateUrl: './lista-productos.component.html',
//   styleUrl: './lista-productos.component.css'
// })

// export class ListaProductosComponent implements OnInit {
//   articulosCarrito: CarritoProducto[] = [];
//   precioTotal: number = 0;

//   constructor(private router: Router) { }

//   ngOnInit(): void {
//     this.articulosCarrito = this.obtenerCarritoDeLocalStorage();
//     this.calcularPrecioTotal();
//   }
//   // ngOnInit(): void {
//   //   this.cargarProductosDelCarrito();
//   // }

//   obtenerCarritoDeLocalStorage(): CarritoProducto[] {
//     const carrito = localStorage.getItem('articulosCarrito');
//     return carrito ? JSON.parse(carrito) : [];
//   }
//   calcularPrecioTotal(): void {
//     this.precioTotal = this.articulosCarrito.reduce((total, producto) => {
//       const precioNumerico = parseFloat(producto.precio.replace(/[\$,\.]/g, ''));
//       return total + (precioNumerico * producto.cantidad);
//     }, 0);
//   }

//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   cargarProductosDelCarrito(): void {
    
//     const productosCarrito = JSON.parse(localStorage.getItem('articulosCarrito')) || [];
//     const contenedorPago = document.querySelector('#lista-carrito tbody');
//     this.precioTotal = 0;

//     productosCarrito.forEach((producto: CarritoProducto) => {
//       const row = document.createElement('tr');
      
//       const precioNumerico = parseInt(producto.precio.replace(/[\$,\.]/g, ''));

//       row.innerHTML = `
//         <td><img src="${producto.imagen}" width="100"></td>
//         <td>${producto.titulo}</td>
//         <td class="precio">${producto.precio}</td>
//         <td>${producto.cantidad}</td>
//         <td>$${(precioNumerico * producto.cantidad).toLocaleString()}</td>
//       `;
      
//       contenedorPago.appendChild(row);
//       this.precioTotal += precioNumerico * producto.cantidad;
//     });

//     const contenedorTotal = document.querySelector('#precioTotal');
//     const precioTotalElemento = document.createElement('div');
//     precioTotalElemento.textContent = `$${this.precioTotal.toLocaleString()}`;
//     contenedorTotal.appendChild(precioTotalElemento);
//   }
// }
