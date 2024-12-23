import { Component, ContentChild, ElementRef } from '@angular/core';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @ContentChild('para') 
  paraEl: ElementRef;

  @ContentChild(TestComponent)
  testComp:TestComponent;
  
  onClick() {
    console.log(this.paraEl);
    console.log('name', this.testComp.name);
  }

}
