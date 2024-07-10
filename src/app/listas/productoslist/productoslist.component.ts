import { Component } from '@angular/core';
import { Productos } from '../../models/Productos.models';
import { ProductoService } from '../../Services/productos.service';

@Component({
  selector: 'app-productoslist',
  standalone: true,
  imports: [],
  templateUrl: './productoslist.component.html',
  styleUrls: ['./productoslist.component.css']
})
export class ProductoslistComponent {
  productos: Productos[] = [];
  nuevoProducto: Productos = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0
  };


  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.obtenerProductos().subscribe(
      (productos: Productos[]) => {
        this.productos = productos;
      },
      (error: any) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  agregarProducto(formulario: any): void {
    if (formulario.invalid) {
      return;
    }

    this.productoService.agregarProducto(this.nuevoProducto).subscribe(
      (producto: Productos) => {
        console.log('Producto agregado:', producto);
        this.cargarProductos(); // Recargar la lista de productos después de agregar uno nuevo
        formulario.resetForm(); // Reiniciar el formulario
      },
      (error: any) => {
        console.error('Error al agregar el producto:', error);
      }
    );
  }
}
