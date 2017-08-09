import { Component,
		OnChanges,
		OnInit, 
		DoCheck, 
		AfterContentInit, 
		AfterContentChecked, 
		AfterViewInit, 
		AfterViewChecked, 
		OnDestroy,
		Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit,
			 DoCheck, AfterContentInit, 
			 AfterContentChecked, AfterViewInit, 
			 AfterViewChecked, OnDestroy, 
			 Input {
  @Input() valorInicial: number = 10;

  constructor() {
  	this.log('contructor')
  }
  ngOnChanges(){
  	this.log('ngOnChanges');
  }
  ngOnInit() {
  	this.log('ngOnInit');
  }
  ngDoCheck(){
  	this.log('ngGoCheck');
  }
  ngAfterContentInit(){
  	this.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
  	this.log('ngAfterContentCheck');
  }
  ngAfterViewInit(){
  	this.log('ngAfterViewInit');	
  }
  ngAfterViewChecked(){
  	this.log('ngAfterViewChecked');	
  }
  ngOnDestroy(){
  	this.log('ngOnDetroy');
  }
  private log(hook: string){
  	console.log(hook);
  }
}
