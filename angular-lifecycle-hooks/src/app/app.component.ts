import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'angular-lifecycle-hooks';
  constructor() {
    console.log("App Constructor");
  }
  inputVal:string = '';
  onSubmit(input: HTMLInputElement ) {
    this.inputVal = input.value;
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called in Application component');
    // console.log('ngAfterViewInit ', this.projectPara.nativeElement);
  }
  ngAfterViewChecked():void {
    console.log('ngAfterViewChecked called in Application component');
  }
}
