import { MeuPrimeiroComponentService } from './meu-primeiro-component.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeuPrimeiroComponentComponent } from './meu-primeiro-component.component';
//import { CursosComponent } from './cursos/cursos.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	MeuPrimeiroComponentComponent,
  	//CursosComponent
  ], 
  //exports: [CursosComponent],
  providers: [ MeuPrimeiroComponentService ]
})
export class MeuPrimeiroComponentModule { }
