import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginObj:any = {
    username:'hradmin@gmail.com',
    password:'112233'
  }
  http = inject(HttpClient);
  router = inject(Router);

  onLogin() {
    this.http.post('https://projectapi.gerasim.in/api/EmployeeManagement/login', this.loginObj).subscribe((res:any) => {
      if(res.result) {
        localStorage.setItem('leaveUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('Your Username or Password is incorrect');
      }
    });
  }
}
