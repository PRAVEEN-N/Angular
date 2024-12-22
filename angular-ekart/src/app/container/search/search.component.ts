import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string = "";

  @Output()
  searchProductText:EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput')
  selectedElementRef: ElementRef;
  onSearchProductText(){
    this.searchText = this.selectedElementRef.nativeElement.value;
    this.searchProductText.emit(this.searchText);
  }

}
