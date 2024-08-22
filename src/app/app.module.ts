import { NgModule } from '@angular/core';                   // => Define un módulo en Angular
import { BrowserModule } from '@angular/platform-browser';  // => Define un módulo necesario para la app funcione en la web

import { AppRoutingModule } from './app-routing.module';    // => Define las rutas de la aplicación del archivo './app-routing.module'
import { AppComponent } from './app.component';             // => Define el componente principal de la aplicación punto de entrada de la UI a la app

//Decorador para definir el módulo
@NgModule({
  declarations: [ // => Declara los componentes
    AppComponent
  ],
  imports: [ // => Importa los módulos que necesita este módulo
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // => Define los servicios
  bootstrap: [AppComponent] // => Indica el componente raíz que debe cargar Angular al correr la aplicación
})
export class AppModule { } // => Clase que define el módulo
