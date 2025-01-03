import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

    const subject = new Subject();
    const data = ajax('https://randomuser.me/api/');
    // data.subscribe((response) => {
    //   console.log(response);
    // });
    // data.subscribe((response) => {
    //   console.log(response);
    // });
    // ajax call returns an Observable and for each subscriotion it will make a new request

    subject.subscribe((response) => {
      console.log(response);
    });
    subject.subscribe((response) => {
      console.log(response);
    });
    data.subscribe(subject);
    // If subject is used it will not make request for every subscriber.It makes only one request and emit the same data to both subscribers

  }
}
