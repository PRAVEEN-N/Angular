import { Component, inject, Inject } from '@angular/core';
import { Subscribe } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  selectedTab: string = 'home';

  // constructor(private service: Subscribe) {

  // }
  service = inject(Subscribe);
  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  onSubscribe() {
    this.service.onSubscribe();
  }
}