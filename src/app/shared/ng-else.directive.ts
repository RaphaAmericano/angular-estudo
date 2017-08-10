import { Directive,
 		Input,
  		TemplateRef,
 		ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){
  	if(!condition){
  		this._viewContainerRef.createEmbeddedView(this._templateRf);
  	} else {
  		this._viewContainerRef.clear();
  	}
  }

  constructor(
	  	private _templateRf: TemplateRef<any>, 
	  	private _viewContainerRef: ViewContainerRef
	) { }
}
