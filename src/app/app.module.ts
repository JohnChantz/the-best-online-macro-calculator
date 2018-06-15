import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BmrCalculatorComponent} from './bmr-calculator/bmr-calculator.component';
import {TdeeCalculatorComponent} from './tdee-calculator/tdee-calculator.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { MacrosCalculatorComponent } from './macros-calculator/macros-calculator.component';
import { IifymCalculatorComponent } from './iifym-calculator/iifym-calculator.component';


const appRoutes: Routes = [
  {path: 'bmr-calculator', component: BmrCalculatorComponent},
  {path: 'tdee-calculator', component: TdeeCalculatorComponent},
  {path: 'macros-calculator', component: MacrosCalculatorComponent},
  {path: 'iifym-calculator', component: IifymCalculatorComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BmrCalculatorComponent,
    TdeeCalculatorComponent,
    FooterComponentComponent,
    MacrosCalculatorComponent,
    IifymCalculatorComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
