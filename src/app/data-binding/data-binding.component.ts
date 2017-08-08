import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  url: any = 'http://www.raphaelamericano.com.br';
  urlImage: string = 'http://lorempixel.com/400/200/nature/';
  cursoAngular: boolean = true;
  // valorAtual: string = '';
  // valorSalvo: string = '';

  //isMouseOver: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  getValor(){
  	return 1;
  }
  getCurtirCurso(){
  	return true;
  }
  botaoClicado(){
  	alert("Funcionando")
  }
  onKeyUp(evento: KeyboardEvent){;
  	//console.log((<HTMLInputElement>evento.target).value);
  	this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor){
  	this.valorSalvo = valor;
  }
  onMouseOverOut(){
  	this.isMouseOver = !this.isMouseOver;
  }
}
