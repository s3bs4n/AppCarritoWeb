import { Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContraseniaComponent } from './components/contrasenia/contrasenia.component';

import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
// import { AuthGuard } from './guards/auth.guard';
// import { AdminGuard } from './guards/admin.guard';
// import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';

export const routes: Routes = [
    { path: 'carrito', component: CarritoComponent },
    { path: 'lista-productos', component: ListaProductosComponent },
    { path: 'login', component: LoginComponent },

    { path: 'admin-login', component: AdminLoginComponent },
    { path: 'admin-dashboard', component: AdminDashboardComponent},
    { path: 'admin-products', component: AdminProductsComponent},
    { path: 'registro', component: RegistroComponent },

    { path: 'contrasenia', component: ContraseniaComponent },
    { path: '**', redirectTo: 'admin-products' }
];


