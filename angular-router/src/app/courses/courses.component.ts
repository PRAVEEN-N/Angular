import { Component, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  coursesService = inject(CourseService);
  AllCourses: Course[] = this.coursesService.courses;
  // router:Router = inject(Router);
  // navigateToCourse(courseId) {
  //   console.log('CurseId', courseId);
  //   this.router.navigate(['Courses/Course', courseId]);
  // }
}
