import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
  	//console.log(this._elementRef.nativeElement.style.backgroundColor);
  	//console.log(this._elementRef);

  	// Codigo abaixo funciona mas não é recomendado pois há vulnerabilidades
  	//this._elementRef.nativeElement.style.backgroundColor = 'yellow';
  	// Boa prática de segurança
  	this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }

}
