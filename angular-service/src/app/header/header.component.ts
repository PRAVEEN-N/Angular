import { Component, Inject } from '@angular/core';
import { Subscribe } from '../Services/subscribe.service';
import { USER_TOKEN } from '../app.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  selectedTab: string = 'home';

  constructor(@Inject(USER_TOKEN) private service: Subscribe) {

  }

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