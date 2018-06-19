import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BmrCalculatorComponent} from './bmr-calculator/bmr-calculator.component';
import {TdeeCalculatorComponent} from './tdee-calculator/tdee-calculator.component';
import {FooterComponentComponent} from './footer-component/footer-component.component';
import {MacrosCalculatorComponent} from './macros-calculator/macros-calculator.component';
import {IifymCalculatorComponent} from './iifym-calculator/iifym-calculator.component';
import {TiledCalculatorsComponent} from './tiled-calculators/tiled-calculators.component';
import {HighlightCalculatorDirective} from './highlight-calculator.directive';
import {HomeComponent} from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BmrCalculatorComponent,
    TdeeCalculatorComponent,
    FooterComponentComponent,
    MacrosCalculatorComponent,
    IifymCalculatorComponent,
    TiledCalculatorsComponent,
    HighlightCalculatorDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
