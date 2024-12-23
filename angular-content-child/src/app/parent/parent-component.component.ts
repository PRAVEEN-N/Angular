import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {

  @ViewChild('para')
  paraEle:ElementRef

  showParent() {
    console.log('parent para', this.paraEle);
  }
}
