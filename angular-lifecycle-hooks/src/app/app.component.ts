import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-lifecycle-hooks';
  constructor() {
    console.log("App Constructor");
  }
  inputVal:string[] = [];
  onSubmit(input: HTMLInputElement ) {
    this.inputVal.push(input.value);
  }

}
