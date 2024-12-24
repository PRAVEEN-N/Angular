import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  name:string = '';

  @Input()
  message:string = 'Hello';
  constructor() {
    console.log("Demo Constructor");
    console.log('Message', this.message) // prints hello, but we are passing this data from parent component. Input properties not injected at initialization (Executing contructor).
  }
}
