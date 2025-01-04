import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  authSrv = inject(AuthService);
  router:Router = inject(Router);
  activateRoute: ActivatedRoute = inject(ActivatedRoute);
  login() {
      this.authSrv.login(this.username.nativeElement.value, this.password.nativeElement.value);
      if(this.authSrv.isLoggedIn) {
        alert('Login successful');
        this.router.navigateByUrl('Courses');
      } else {
        alert('Invalid username or password');
      }
  }

  ngOnInit(): void {
    this.activateRoute.queryParamMap.subscribe(data => {
      const logout = data.get('logout');
      if(logout) {
        this.authSrv.logout();
        alert('Logged out successfully ' + this.authSrv.isLoggedIn);
        this.router.navigateByUrl('login');
      }
    });
  }
}
