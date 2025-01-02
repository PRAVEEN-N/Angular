import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // this.createBtnObs();
  }
  title = 'angular-observables';

  data: any[] = [];

  // @ViewChild('obsbtn')
  // obsbtn: ElementRef;

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
  // myObervable = from(this.myPromise); // can be used to convert promise to observable
  // myObervable = from([2,4,6,8,10,12]); // can be used to convert array to observable
  myObervable = from([2,4,6,8,10,12]).pipe(map((data) => {
    return data * 5;
  }), filter((data) => {
    return data % 4 === 0;
  }));
  // transFormedObs = this.myObervable.pipe(map((data) => {
  //   return data * 5;
  // }));
  // filtered = this.transFormedObs.pipe(filter((data) => {
  //   return data % 4 === 0;
  // }));

  // filtered = this.myObervable.pipe(map((data) => {
  //   return data * 5;
  // }), filter((data) => {
  //   return data % 4 === 0;
  // }));

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

  // createBtnObs() {
  //   let count = 0;
  //   fromEvent(this.obsbtn.nativeElement, 'click').subscribe((data) => {
  //     console.log(data);
  //     this.addItem(++count);
  //   });
  // }
  // addItem(count) {
  //   let div = document.createElement('div');
  //   div.innerText = `Item ${count}`;
  //   div.className = 'data-list';
  //   const container = document.getElementById('container');
  //   container.appendChild(div);
  // }
}
