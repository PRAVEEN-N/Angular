import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck{

  name:string = '';

  @Input()
  message:string = '';
  constructor() {
    console.log("Demo Constructor");
    console.log('Message', this.message) // prints hello, but we are passing this data from parent component. Input properties not injected at initialization (Executing contructor).
  }
  ngOnChanges(changes: SimpleChanges): void { // Now it will not be executed if any new elements are added as it as an array (executes only when reference changes)
    console.log('changes', changes);
    console.log('mesage', this.message);
  }
  ngOnInit(): void {
    console.log('ngOnInit executed');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck is called');
  }
}
