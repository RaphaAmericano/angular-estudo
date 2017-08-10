import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
	this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave(){
  	this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';//Input Property com mesmo nome da diretiva, o interpreta corretamente

  constructor() { }
  ngOnInit(){
  	this.backgroundColor = this.defaultColor;
  }
}
