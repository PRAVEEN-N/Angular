import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  AllCourses: Course[];
  activedRoute: ActivatedRoute = inject(ActivatedRoute);
  // router:Router = inject(Router);
  // navigateToCourse(courseId) {
  //   console.log('CurseId', courseId);
  //   this.router.navigate(['Courses/Course', courseId]) ;
  // }
  ngOnInit(): void {
    // let searchText = this.activedRoute.snapshot.queryParams['search'];
    // if(searchText) {
    //   console.log(searchText);
    //   this.AllCourses = this.coursesService.courses.filter(c=> c.title.toLowerCase().includes(searchText.toLowerCase()));
    // } else {
    //   this.AllCourses = this.coursesService.courses;
    // }
    this.activedRoute.queryParamMap.subscribe((params) => {
      let searchText = params.get('search');
      if (searchText) {
        console.log(searchText);
        this.AllCourses = this.coursesService.courses.filter((c) =>
          c.title.toLowerCase().includes(searchText.toLowerCase())
        );
      } else {
        this.AllCourses = this.coursesService.courses;
      }
    });
  }
}
