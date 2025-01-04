// import { inject } from "@angular/core";
// import { AuthService } from "./Services/auth.service";
// import { Router } from "@angular/router";

import { inject, Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./Services/auth.service";
import { Observable } from "rxjs";

// export const CanActivate = () => {
//     const authSrv = inject(AuthService);
//     const router = inject(Router);
//     if(!authSrv.isAuhenicated()){
//         alert('You are not authorized to access this page');
//         router.navigateByUrl('login');
//         return false;
//     }
//     return true;
// }
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{
    authSrv = inject(AuthService);
    router = inject(Router);
    canActivate() {
        if(!this.authSrv.isAuhenicated()){
            alert('You are not authorized to access this page');
            this.router.navigateByUrl('login');
            return false;
        }
        return true;
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate();
    }

}
