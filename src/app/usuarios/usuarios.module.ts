import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosCabezeraComponent } from './usuarios-cabezera/usuarios-cabezera.component';
import { UsuarioCabeceraComponent } from './usuario-cabecera/usuario-cabecera.component';


@NgModule({
  declarations: [
    UsuariosCabezeraComponent,
    UsuarioCabeceraComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
