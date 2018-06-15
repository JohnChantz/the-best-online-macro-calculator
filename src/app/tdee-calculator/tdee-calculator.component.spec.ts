import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeeCalculatorComponent } from './tdee-calculator.component';

describe('TdeeCalculatorComponent', () => {
  let component: TdeeCalculatorComponent;
  let fixture: ComponentFixture<TdeeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdeeCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdeeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
