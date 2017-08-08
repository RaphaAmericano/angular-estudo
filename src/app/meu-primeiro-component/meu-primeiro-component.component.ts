import { MeuPrimeiroComponentService } from './meu-primeiro-component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-component',
  templateUrl: './meu-primeiro-component.component.html',
  styleUrls: ['./meu-primeiro-component.component.css']
})
export class MeuPrimeiroComponentComponent implements OnInit {
  
  nomePortal: string;
  cursos: string[];
  

  constructor(private MeuPrimeiroComponentService: MeuPrimeiroComponentService) { 
  	//this.nomePortal = 'www.raphaelamericano.com.br'; 

  	// for( let i=0; i < this.cursos.length; i++ ){ 
  	// 	let curso = this.cursos[i];
  	// }

    //var servico = new MeuPrimeiroComponentService();

    this.cursos = this.MeuPrimeiroComponentService.getCursos();
    this.nomePortal = this.MeuPrimeiroComponentService.getNomePortal();
  }

  ngOnInit() {
  }

}
