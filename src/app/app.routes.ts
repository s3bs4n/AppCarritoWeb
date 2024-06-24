import { Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'carrito', component: CarritoComponent },
    { path: 'lista-productos', component: ListaProductosComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login' }
];


