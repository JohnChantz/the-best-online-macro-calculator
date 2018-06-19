import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MacrosCalculatorComponent} from './macros-calculator/macros-calculator.component';
import {BmrCalculatorComponent} from './bmr-calculator/bmr-calculator.component';
import {IifymCalculatorComponent} from './iifym-calculator/iifym-calculator.component';
import {HomeComponent} from './home/home.component';
import {TdeeCalculatorComponent} from './tdee-calculator/tdee-calculator.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bmr-calculator', component: BmrCalculatorComponent},
  {path: 'tdee-calculator', component: TdeeCalculatorComponent},
  {path: 'macros-calculator', component: MacrosCalculatorComponent},
  {path: 'iifym-calculator', component: IifymCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
