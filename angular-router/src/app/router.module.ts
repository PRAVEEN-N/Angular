import { inject, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { PopularComponent } from "./home/popular/popular.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
// import { AuthGuard } from "./auth.guard";
import { canActivate, canExit } from "./auth.guard";
// import { CanActivate } from "./auth.guard";
// import { AuthService } from "./Services/auth.service";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    {
      path: 'Contact',
      component: ContactComponent,
      canDeactivate:[canExit]
    },
    {
      path: 'Courses',
      component: CoursesComponent,
    },
    // {
    //   path:'Courses/Course/:id',
    //   component: CourseDetailComponent
    // },
    {
      path: 'Courses',
      // canActivateChild:[AuthGuard],
      canActivateChild: [canActivate],
      children: [
        { path: 'Course/:id', component: CourseDetailComponent },
        {path:'Popular', component:PopularComponent},
        {path:'Checkout', component:CheckoutComponent, canActivate:[canActivate]}
      ]
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
      path: '**', // It should be the last route in the array of routes because it is a wildcard route. The router will select this route if the requested URL doesn't match any paths for routes defined in the configuration.
      component: NotFoundComponent,
    },
  ];
  
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class RoutingModule {

}