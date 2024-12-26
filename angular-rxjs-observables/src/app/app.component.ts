import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-observables';

  data: any[] = [];

  myObervable = new Observable((observer)=> {
    setTimeout(()=> {
      observer.next(1)
    }, 1000);
    setTimeout(()=> {
      observer.next(2)
    }, 2000);
    setTimeout(()=> {
      observer.next(3)
    }, 4000);
    setTimeout(()=> {
      observer.next(4)
    }, 5000);
  })

  getData() {
    this.myObervable.subscribe((data:any) => {
      this.data.push(data);
    })
  }
}
