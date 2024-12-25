import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-switch';
  tab:string = '';
  onTabChange(tab:string){
    console.log('tab is clicked', tab)
    this.tab = tab;
  }
}
