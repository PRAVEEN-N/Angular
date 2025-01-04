import { inject, Injectable, Injector } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    isLoggedIn = false;
    userSrv = inject(UserService);
    login(username:string, password:string) {
        let validUser =  this.userSrv.users.find(user=> user.username === username && user.password === password);
        if(validUser){
            this.isLoggedIn = true;
            // return true;
        }
        // return false
    }
    isAuhenicated(){
        return this.isLoggedIn;
    }
    logout(){
        this.isLoggedIn = false;
    }
}