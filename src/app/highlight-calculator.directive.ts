import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlightCalculator]'
})
export class HighlightCalculatorDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }

}
