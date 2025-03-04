import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesService } from './Services/services.service';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './home/banner/banner.component';
import { ServicesComponent } from './home/services/services.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { PopularComponent } from './home/popular/popular.component';
import { CourseService } from './Services/course.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './router.module';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'About', component: AboutComponent },
//   {
//     path: 'Contact',
//     component: ContactComponent,
//   },
//   {
//     path: 'Courses',
//     component: CoursesComponent,
//   },
//   // {
//   //   path:'Courses/Course/:id',
//   //   component: CourseDetailComponent
//   // },
//   {
//     path: 'Courses',
//     children: [
//       { path: 'Course/:id', component: CourseDetailComponent },
//       {path:'Popular', component:PopularComponent}
//     ]
//   },
//   {
//     path: '**', // It should be the last route in the array of routes because it is a wildcard route. The router will select this route if the requested URL doesn't match any paths for routes defined in the configuration.
//     component: NotFoundComponent,
//   },
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    BannerComponent,
    ServicesComponent,
    TestimonyComponent,
    ContactUsComponent,
    PopularComponent,
    CoursesComponent,
    CourseDetailComponent,
    LoginComponent,
    NotFoundComponent,
    CheckoutComponent,
  ],
  imports: [BrowserModule, FormsModule, 
    // RouterModule.forRoot(routes)
    RoutingModule
    ],
  providers: [ServicesService, CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
