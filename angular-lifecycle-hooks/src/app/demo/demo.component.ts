import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges{

  name:string = '';

  @Input()
  message:string = '';
  constructor() {
    console.log("Demo Constructor");
    console.log('Message', this.message) // prints hello, but we are passing this data from parent component. Input properties not injected at initialization (Executing contructor).
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    console.log('mesage', this.message);
  }
}
