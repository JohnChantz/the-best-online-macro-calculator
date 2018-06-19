import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  links = [
    {title: 'Home', link: '/'},
    {title: 'BMR Calculator', link: '/bmr-calculator'},
    {title: 'IIFYM Calculator', link: '/iifym-calculator'},
    {title: 'TDEE Calculator', link: 'tdee-calculator'},
    {title: 'Macros Calculator', link: 'macros-calculator'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
