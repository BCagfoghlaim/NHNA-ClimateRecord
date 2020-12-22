import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-navbar></app-navbar>
    <body><router-outlet></router-outlet></body>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
    body{padding-left: 20px;}`
]
})
export class AppComponent {
  title = 'Events';
}