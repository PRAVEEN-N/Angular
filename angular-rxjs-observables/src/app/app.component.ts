import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-observables';

  data: any[] = [];

  // myObervable = new Observable((observer) => {
    // setTimeout(() => {
    //   observer.next(1);
    // }, 1000);
    // setTimeout(() => {
    //   observer.next(2);
    // }, 2000);
    // setTimeout(() => {
    //   observer.next(3);
    // }, 4000);
    // // setTimeout(() => {
    // //   observer.error(new Error('Something went wrong'));
    // // }, 4000);
    // setTimeout(() => {
    //   observer.next(4);
    // }, 5000);
    // setTimeout(() => {
    //   observer.complete();
    // }, 6000);
  // });
  // myObervable = of([1,2,3], true, '1') // to convert any data to observable auto emits completion event
  // myObervable = from([1,2,3,4,5,6,7,8,9,10]); //  to convert array (iterable )to observable auto emits completion event
  // myObervable = from(1); // returnns error because the input is not iterable
  // myObervable = from('hello'); // returnns'h', 'e', 'l', 'l', 'o', 'completed' because the input is iterable (string: sequence of chars)
  myPromise = new Promise((resolve, reject) => {
    resolve(1);
  });
  myObervable = from(this.myPromise); // can be used to convert promise to observable
  getData() {
    // this.myObervable.subscribe(
    //   (data: any) => {
    //     this.data.push(data);
    //   },
    //   (err) => {
    //     alert(err.message);
    //   },
    //   () => {
    //     alert('streaming completed');
    //   }
    // );
    this.myObervable.subscribe({
      next: (data)=> {
        this.data.push(data);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert('streaming completed');
      },
    })
  }
}
