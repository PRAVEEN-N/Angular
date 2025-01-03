import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {
  counter = interval(1000);// Emitting a value every second
  data : number[] = [];
  subscriber;
  onSubscribe() {
    this.subscriber = this.counter.subscribe((val) => {
      this.data.push(val);
    });
  }
  onUnSubscribe() {
    this.subscriber.unsubscribe();
  }
}
