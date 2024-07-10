import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductoslistComponent } from './listas/productoslist/productoslist.component';
import { CarritolistComponent } from './listas/carritolist/carritolist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductoslistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CarritoCompleto';
}
