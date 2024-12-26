import { Component, Inject } from '@angular/core';
import { Subscribe } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  constructor(@Inject('subscriber') private service: Subscribe) {

  }

  onSubscribe() {
    this.service.onSubscribe();
  }
}