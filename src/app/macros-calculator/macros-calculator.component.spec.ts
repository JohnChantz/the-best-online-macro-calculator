import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacrosCalculatorComponent } from './macros-calculator.component';

describe('MacrosCalculatorComponent', () => {
  let component: MacrosCalculatorComponent;
  let fixture: ComponentFixture<MacrosCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacrosCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacrosCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
