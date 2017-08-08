import { TestBed, inject } from '@angular/core/testing';

import { MeuPrimeiroComponentService } from './meu-primeiro-component.service';

describe('MeuPrimeiroComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeuPrimeiroComponentService]
    });
  });

  it('should be created', inject([MeuPrimeiroComponentService], (service: MeuPrimeiroComponentService) => {
    expect(service).toBeTruthy();
  }));
});
