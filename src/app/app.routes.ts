import { Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

export const routes: Routes = [

    {path: 'lista-productos' , component: ListaProductosComponent},
    {path: '**' , redirectTo: 'lista-productos'},
    



];
