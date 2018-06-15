import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IifymCalculatorComponent } from './iifym-calculator.component';

describe('IifymCalculatorComponent', () => {
  let component: IifymCalculatorComponent;
  let fixture: ComponentFixture<IifymCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IifymCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IifymCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
