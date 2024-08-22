import { NgModule } from '@angular/core';               // => Importa el decorador NgModule desde '@angular/core', usado para definir un módulo en Angular
import { RouterModule, Routes } from '@angular/router'; // => Importa RouterModule y Routes desde '@angular/router'
import { AppComponent } from './app.component';
import { ValidacionComponent } from './formularios/validacion/validacion.component';
//RouterModule =>  Permite configurar el enrutamiento
//Routes => Permite configurar las rutas

//Array de objetos de rutas
const routes: Routes = [
  {path:"", component:AppComponent},
  {path:"forms", component:ValidacionComponent}
];

//Decorador que define un módulo
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // => Configura el enrutamiento principal de la aplicación usando las rutas definidas en el array 'routes'.
  exports: [RouterModule]                   // => Se exporta para que el módulo de enrutamiento pueda ser utilizado en otros módulos de la aplicación que importen 'AppRoutingModule'.
})

//Define la clase 'AppRoutingModule' que es el módulo de enrutamiento de la apliación.
export class AppRoutingModule { }
