import { Component } from '@angular/core';  // => Importa el decorador Component, esencial para definir una clase como componente de Angular

//Decorador para definir un componente
@Component({
  selector: 'app-root',                 // => Define el nombre del componente
  templateUrl: './app.component.html',  // => Define la ubicación del archivo HTML que actúa como vista del componente
  styleUrls: ['./app.component.css']    // => Define la ubicación del archivo CSS que contiene los estilos específicos para el componente
})

//Esta es la clase del componente
//Contiene toda la lógica y los datos que estarán disponibles para la vista
export class AppComponent {
  title = 'AppAng';
}
