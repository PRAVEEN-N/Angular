import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  ngOnInit(): void {
    // let obs = new Observable((observer) => {
    //   observer.next(Math.random());
    // });
    // obs.subscribe((data) => {
    //   console.log(data);
    // });
    // obs.subscribe((data) => {
    //   console.log(data);
    // });
    // The observer will not emit same data to both subscribers because it is a unicast

    // let subject = new Subject();

    // subject.subscribe((data) => {
    //   console.log(data);
    // });
    // subject.subscribe((data) => {
    //   console.log(data);
    // });
    // subject.next(Math.random());
    // The subject will emit same data to both subscribers because it is a multicast

    // const subject = new Subject();
    // const data = ajax('https://randomuser.me/api/');
    // data.subscribe((response) => {
    //   console.log(response);
    // });
    // data.subscribe((response) => {
    //   console.log(response);
    // });
    // ajax call returns an Observable and for each subscriotion it will make a new request

    // subject.subscribe((response) => {
    //   console.log(response);
    // });
    // subject.subscribe((response) => {
    //   console.log(response);
    // });
    // data.subscribe(subject);
    // If subject is used it will not make request for every subscriber.It makes only one request and emit the same data to both subscribers

    // const behaviorSubject = new BehaviorSubject<number>(100); // BevahiorSubject is used to mention the initial value

    // behaviorSubject.subscribe((data) => {
    //   console.log('Subscriber 1', data);
    // });
    // behaviorSubject.subscribe((data) => {
    //   console.log('Subscriber 2', data);
    // });
    // behaviorSubject.next(200); // It will emit the value to both subscribers

    // behaviorSubject.subscribe((data) => {
    //   console.log('Subscriber 3', data); // It will emit the last emitted value to the new subscriber i.e 200
    // });

    // const replySubject = new ReplaySubject(2); // BevahiorSubject is used to mention the initial value

    // replySubject.next(2020);
    // replySubject.next(2021);
    // replySubject.next(2022);

    // replySubject.subscribe((data) => {
    //   console.log('Subscriber 1', data);
    // });
    // replySubject.subscribe((data) => {
    //   console.log('Subscriber 2', data);
    // });
    // replySubject.next(100);

    // replySubject.subscribe((data) => {
    //   console.log('Subscriber 3', data);
    // });

    // const asyncSubject = new AsyncSubject(); // AsyncSubject will emit the last value only after the subject is completed
    // asyncSubject.subscribe((data) => {
    //   console.log('Subscriber 1', data);
    // });

    // asyncSubject.next(2020);
    // asyncSubject.next(2021);
    // asyncSubject.next(2022);
    // asyncSubject.complete();
    // asyncSubject.next(2023); // It will not emit this value because the subject is completed

    // asyncSubject.subscribe((data) => {
    //   console.log('Subscriber 2', data);
    // });

    // Promise vs Observable
    const promise = new Promise((resolve, reject) => {
        console.log('Promise Called');
        resolve('Promise Resolved');
    }); // It will be called immediately and Only one value can be emitted

    const obs = new Observable((obs) => {
      console.log('Observable Called');
      obs.next(100);
      obs.next(200);
      obs.next(300);
    }); // It will be called only when we subscribe to it and multiple values can be emitted

    promise.then((data) => {
      console.log(data);
    });

    obs.subscribe((data) => {
      console.log(data);
    });
  }
}
