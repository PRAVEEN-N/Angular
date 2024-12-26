import { Component, Inject } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { Subscribe } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(@Inject(USER_TOKEN) private service: Subscribe) {

  }


  onSubscribe() {
    this.service.onSubscribe();
  }
}
