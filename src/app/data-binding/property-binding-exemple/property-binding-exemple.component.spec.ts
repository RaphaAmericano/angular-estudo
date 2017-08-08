import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingExempleComponent } from './property-binding-exemple.component';

describe('PropertyBindingExempleComponent', () => {
  let component: PropertyBindingExempleComponent;
  let fixture: ComponentFixture<PropertyBindingExempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBindingExempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
