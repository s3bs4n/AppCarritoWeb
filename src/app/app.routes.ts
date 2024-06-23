import { Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

export const routes: Routes = [
    { path: 'carrito', component: CarritoComponent },
    { path: 'lista-productos', component: ListaProductosComponent },
    { path: '**', redirectTo: 'lista-productos' }
];


