import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../models/Productos.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:8082/api/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.apiUrl);
  }

  agregarProducto(producto: Productos): Observable<Productos> {
    return this.http.post<Productos>(this.apiUrl, producto);
  }
}
