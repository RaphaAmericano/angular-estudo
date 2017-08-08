import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  
  constructor() { }

  ngOnInit() {
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
