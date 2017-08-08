import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegundoComponentComponent } from './segundo-component.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

//import { DetalhesModule } from './detalhes/detalhes.module';

@NgModule({
  imports: [
    CommonModule
   //,DetalhesModule
  ],
  declarations: [
  	SegundoComponentComponent, 
  	DetalhesComponent
  ],
   exports:[ 
   		SegundoComponentComponent, 
   		DetalhesComponent
   ]
})
export class SegundoComponentModule { }
