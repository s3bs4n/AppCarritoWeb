import { Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContraseniaComponent } from './components/contrasenia/contrasenia.component';


export const routes: Routes = [
    { path: 'carrito', component: CarritoComponent },
    { path: 'lista-productos', component: ListaProductosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'contrasenia', component: ContraseniaComponent },
    // { path: '**', redirectTo: 'lista-productos' }
];


