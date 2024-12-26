import { Component, Inject } from '@angular/core';
import { Subscribe } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(@Inject('subscriber') private service: Subscribe) {

  }


  onSubscribe() {
    this.service.onSubscribe();
  }
}
