import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string = "";

  @Output()
  searchProductText:EventEmitter<string> = new EventEmitter<string>();

  onSearchProductText(searchInput:HTMLInputElement){
    this.searchText = searchInput.value;
    this.searchProductText.emit(this.searchText);
  }

}
