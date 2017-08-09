import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.scss']
})
export class DiretivaNgswitchComponent implements OnInit {
  
  textoBrand: string = 'Navbar w/ text';
  textoExemplo: string = 'Navbar text with an inline element';

  aba: string = 'home';
  constructor() { }

  ngOnInit() {
  }

}
