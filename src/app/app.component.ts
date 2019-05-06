/**
 * The same as how we've redirected App -> Core, the App ts
 * AND html file will redirect to the Core
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
}
