import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']//,
  //outputs: ['mudouValor']  outra maneira
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter(); 
  
   @ViewChild('campoInput') campoValorInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  incrementa(){
    //console.log(this.campoValorInput.nativeElement.value);
  	this.campoValorInput.nativeElement.value++;
    //this.valor++;
  	this.mudouValor.emit({novoValor: this.valor})
  }
  decrementa(){
    this.campoValorInput.nativeElement.value--;
  	//this.valor--;
  	this.mudouValor.emit({novoValor: this.valor})
  }
}
