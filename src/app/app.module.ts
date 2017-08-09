import { MeuPrimeiroComponentService } from './meu-primeiro-component/meu-primeiro-component.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';
//import { SegundoComponentComponent } from './segundo-component/segundo-component.component';

//Modules
//import { MeuPrimeiroComponentModule } from './meu-primeiro-component/meu-primeiro-component.module';
import { SegundoComponentModule  } from './segundo-component/segundo-component.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponentComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivaNgifComponent,
   // SegundoComponentComponent
  ],
  imports: [
    BrowserModule,
    SegundoComponentModule,
    FormsModule,
    MeuFormModule
    //MeuPrimeiroComponentModule
  ],
  providers: [MeuPrimeiroComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
