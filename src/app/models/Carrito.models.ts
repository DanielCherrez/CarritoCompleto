import { Productos } from "./Productos.models";



export interface Carrito {
    id: number;
    productos: Productos[];
    // Otros campos del carrito si los tienes
}
