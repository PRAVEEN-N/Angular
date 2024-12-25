import { Component } from '@angular/core';
import { Subscribe } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [Subscribe]
})

export class HeroComponent {
  constructor(private service: Subscribe) {

  }

  onSubscribe() {
    this.service.onSubscribe();
  }
}