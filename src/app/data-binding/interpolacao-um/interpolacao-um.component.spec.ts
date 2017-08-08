import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolacaoUmComponent } from './interpolacao-um.component';

describe('InterpolacaoUmComponent', () => {
  let component: InterpolacaoUmComponent;
  let fixture: ComponentFixture<InterpolacaoUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolacaoUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolacaoUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
