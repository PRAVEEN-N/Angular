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

  onSearchProductText(){
    this.searchProductText.emit(this.searchText);
  }

}
