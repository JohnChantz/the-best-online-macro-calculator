import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bmr-calculator',
  templateUrl: './bmr-calculator.component.html',
  styleUrls: ['./bmr-calculator.component.css']
})
export class BmrCalculatorComponent implements OnInit {

  private brm;
  private heightInCm;
  private heightInFt;
  private age;
  public weightInKg;
  private weightInLbs;

  constructor() {
  }

  ngOnInit() {
  }

  calculateBMR_metric(heightInCm, weightInKg, age) {
    this.brm = 66.5 + (13.75 * weightInKg) + (5.003 * heightInCm) - (6.755 * age);
  }

  calculateBMR_imperial(heightInFt, weightInLbs, age) {
    this.brm = 66 + (6.2 * heightInFt) + (12.7 * heightInFt) - (6.76 * age);
  }

  calculate() {
    alert('Hi!');
  }
}
