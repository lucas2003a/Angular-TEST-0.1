import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-cabecera',
  templateUrl: './usuario-cabecera.component.html',
  styleUrls: ['./usuario-cabecera.component.css']
})
export class UsuarioCabeceraComponent {
  title: string = "Cabecera de usuarios";
  urlImg :string = "https://static.vecteezy.com/system/resources/thumbnails/022/645/069/small/illustration-painting-of-love-riding-on-bicycle-generate-ai-photo.jpg";
  content : string ="<h2>Imagen de prueba</h2>"
  isActive : boolean = true;
  isHidden  : boolean = true;
  nombre : string = "";
  errorCode : number = 0;
  //students : Array<any> = []; Esta es otra forma valida de definir un  array en angular(any define  un array de cualquier tipo de dato)
  students : any[] = [
    {id: 1, name: "Juan", age: 25, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"},
    {id: 2, name: "Pedro", age: 30, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"},
    {id: 3, name: "Ana", age: 28, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"},
    {id: 4, name: "Maria", age: 22, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"},
    {id: 5 , name: "Carlos", age: 35, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"}

  ];

  productos : any[] =[
    {id:1 , name:"Arros", price:100, moneda:"Soles"},
    {id:2 , name:"Cebolla", price:50, moneda:"Soles"},
    {id:3 , name:"Tomate", price:70, moneda:"Soles"},
    {id:4 , name:"Pimiento", price:80, moneda:"Soles"},
    {id:5 , name:"Cebolla china", price:60, moneda:"Soles"}
  ]




  ActualizarNumero(e : Event): void{
    let numeroObtenido = e.target as HTMLInputElement;
    this.errorCode = parseInt(numeroObtenido.value, 10);
  }

  CambiarActividad(){
    this.isActive = this.isActive == true ? false: true;
  }

  ShowDetails(){
    this.isHidden == false ? this.isHidden = true : this.isHidden = false;
  }

  Saludar() {
    if(this.nombre ==  ""){
      alert("Debes ingresar un nombre");
    }else{
      alert(`hola ${this.nombre}`);

    }

  }
}
