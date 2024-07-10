import { Routes } from '@angular/router';
import { ProductoslistComponent } from './listas/productoslist/productoslist.component';
import { CarritolistComponent } from './listas/carritolist/carritolist.component';


export const routes: Routes = [
    { path: 'productos', component: ProductoslistComponent },
    { path: 'carrito', component: CarritolistComponent },
    { path: '', redirectTo: '/productos', pathMatch: 'full' }
];
