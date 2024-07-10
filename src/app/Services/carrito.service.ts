import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrito } from '../models/Carrito.models';
import { Productos } from '../models/Productos.models';

@Injectable({
    providedIn: 'root'
})
export class CarritoService {
    private apiUrl = 'http://localhost:8082/carrito'; // Reemplaza con la URL de tu API

    constructor(private http: HttpClient) { }

    obtenerCarrito(id: number): Observable<Carrito> {
      return this.http.get<Carrito>(`${this.apiUrl}/carritos/${id}`);
    }
    agregarProductoAlCarrito(id: number, producto: Productos): Observable<Carrito> {
      return this.http.post<Carrito>(`${this.apiUrl}/${id}/agregar`, producto);
    }

    guardarCarrito(carrito: Carrito): Observable<Carrito> {
        return this.http.post<Carrito>(this.apiUrl, carrito);
    }

    eliminarCarrito(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
