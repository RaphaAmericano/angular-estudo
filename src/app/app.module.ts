import { MeuPrimeiroComponentService } from './meu-primeiro-component/meu-primeiro-component.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';
//import { SegundoComponentComponent } from './segundo-component/segundo-component.component';

//Modules
//import { MeuPrimeiroComponentModule } from './meu-primeiro-component/meu-primeiro-component.module';
import { SegundoComponentModule  } from './segundo-component/segundo-component.module';
import { DataBindingModule  } from './data-binding/data-binding.module';
//import { DataBindingComponent } from './data-binding/data-binding.component';
//import { InterpolacaoUmComponent } from './data-binding/interpolacao-um/interpolacao-um.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponentComponent,
    //InterpolacaoUmComponent,
   // SegundoComponentComponent
  ],
  imports: [
    BrowserModule,
    DataBindingModule,
    SegundoComponentModule
    //MeuPrimeiroComponentModule
  ],
  providers: [MeuPrimeiroComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
