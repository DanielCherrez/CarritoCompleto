import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductoslistComponent } from './listas/productoslist/productoslist.component';
 // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [
    AppComponent,
    ProductoslistComponent  // Añade el componente aquí si no está presente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
