import { Component, Inject } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { Subscribe } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  constructor(@Inject(USER_TOKEN) private service: Subscribe) {

  }

  onSubscribe() {
    this.service.onSubscribe();
  }
}