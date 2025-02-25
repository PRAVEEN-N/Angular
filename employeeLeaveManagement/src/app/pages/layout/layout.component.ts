import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  loggedInUserData: any;

  router = inject(Router);
  
  constructor() {
    const user = localStorage.getItem('leaveUser');
    if(user) {
      this.loggedInUserData = JSON.parse(user);
    }
  }
  onLogOff() {
    localStorage.removeItem('leaveUser');
    this.router.navigateByUrl('/login');
  }
}
