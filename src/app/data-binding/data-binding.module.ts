import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingComponent } from './data-binding.component'
import { InterpolacaoUmComponent } from './interpolacao-um/interpolacao-um.component';
import { PropertyBindingExempleComponent } from './property-binding-exemple/property-binding-exemple.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [
  	DataBindingComponent,
  	InterpolacaoUmComponent,
  	PropertyBindingExempleComponent,
  	ClassStyleBindingComponent,
  	EventBindingComponent
  ],
  exports: [
  	DataBindingComponent,
  	InterpolacaoUmComponent,
  	PropertyBindingExempleComponent,
  	ClassStyleBindingComponent,
  	EventBindingComponent
  ]
})
export class DataBindingModule { }