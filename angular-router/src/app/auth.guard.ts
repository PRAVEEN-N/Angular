// import { inject } from "@angular/core";
// import { AuthService } from "./Services/auth.service";
// import { Router } from "@angular/router";

import { inject, Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, CanDeactivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./Services/auth.service";
import { Observable } from "rxjs";
import { CourseService } from "./Services/course.service";

export const canActivate:CanActivateFn = (route, state) =>{
    const authSrv = inject(AuthService);
    const router = inject(Router);
    if(!authSrv.isAuhenicated()){
        alert('You are not authorized to access this page');
        router.navigateByUrl('login');
        return false;
    }
    return true;
}

export interface ICanDeactivateComp {
    canExit(): boolean;
}
export const canExit: CanDeactivateFn<ICanDeactivateComp> = (component: ICanDeactivateComp, currentRoute, currentState, nextState) =>{
    return component.canExit();
};

export const resolve = () => {
    const courseSrv = inject(CourseService);
    return courseSrv.getAllcourses();
}
// @Injectable({
//     providedIn: 'root'
// })
// export class AuthGuard implements CanActivate, CanActivateChild{
//     authSrv = inject(AuthService);
//     router = inject(Router);
//     canActivate() {
//         if(!this.authSrv.isAuhenicated()){
//             alert('You are not authorized to access this page');
//             this.router.navigateByUrl('login');
//             return false;
//         }
//         return true;
//     }
//     canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//         return this.canActivate();
//     }

// }
