import { Component } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Hello, World';

  valor: number = 5;
  deletarCiclo: boolean = false;
  mudarValor(){
  	this.valor++;
  }
  destruirCiclo(){
  	this.deletarCiclo = true;
  }
  list = _.map([1, 2, 3 ], (n) => `# ${n}`);
}
