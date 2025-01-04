import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { PopularComponent } from "./home/popular/popular.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    {
      path: 'Contact',
      component: ContactComponent,
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
      children: [
        { path: 'Course/:id', component: CourseDetailComponent },
        {path:'Popular', component:PopularComponent}
      ]
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