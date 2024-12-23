import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent {

  @ViewChildren('name')
  names: QueryList<ElementRef>;

  fullName:string =''
  show() {
    this.fullName+= ' ';
    this.names.forEach(el => {
      this.fullName +=el.nativeElement.value + ' ';
    });
    this.fullName.trim();
  }
}
