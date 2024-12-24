import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  name:string = '';

  @Input()
  message:string = '';
  @ContentChild('parTemp')
  projectPara!: ElementRef;

  @ViewChild('childMessage')
  childMessage!: ElementRef;

  constructor() {
    // console.log("Demo Constructor");
    // console.log('Message', this.message) // prints hello, but we are passing this data from parent component. Input properties not injected at initialization (Executing contructor).
  }
  ngOnChanges(changes: SimpleChanges): void { // Now it will not be executed if any new elements are added as it as an array (executes only when reference changes)
    console.log('ngOnChanges called');
    // console.log('mesage', this.message);
  }
  ngOnInit(): void {
    console.log('ngOnInit executed');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck is called');
    // console.log('ngDoCheck contentChild', this.projectPara);
  }
  ngAfterContentInit(): void {// It will be called after ContentChild is intialized
    console.log('ngAfterContentInit called');
    // console.log('contentChild', this.projectPara.nativeElement);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    // console.log('ngAfterContentChecked ', this.projectPara.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    // console.log('ngAfterViewInit ', this.projectPara.nativeElement);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called in Demo');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy has been called in Demo component')
  }
}
