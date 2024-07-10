import { Component, OnInit } from '@angular/core';
import { Carrito } from '../../models/Carrito.models';
import { CarritoService } from '../../Services/carrito.service';

@Component({
  selector: 'app-carritolist',
  standalone: true,
  imports: [],
  templateUrl: './carritolist.component.html',
  styleUrls: ['./carritolist.component.css']
})
export class CarritolistComponent implements OnInit {
  carrito!: Carrito; // Usa '!' para indicar que será inicializado antes de usarlo

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carritoService.obtenerCarrito(1).subscribe(
      (carrito: Carrito) => {
        this.carrito = carrito;
      },
      error => {
        console.error('Error al obtener el carrito:', error);
      }
    );
  }
}