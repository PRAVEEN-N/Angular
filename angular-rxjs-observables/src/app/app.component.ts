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
    observer.next([1,2,3,4]);
  })

  getData() {
    this.myObervable.subscribe((data:any) => {
      this.data = data;
    })
  }
}
