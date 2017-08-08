import { Injectable } from '@angular/core';

@Injectable()
export class MeuPrimeiroComponentService {
  // nomePortal: string = 'www.raphaelamericano.com.br';
  // cursos: string[] = ['Java', 'Python', 'C++', 'Swift', 'Javascript'];
  constructor() { }
  getNomePortal(){
  	return 'www.raphaelamericano.com.br';
  }
  getCursos(){ 
  	return ['Java', 'Python', 'C++', 'Swift', 'Javascript'];
  }
}
