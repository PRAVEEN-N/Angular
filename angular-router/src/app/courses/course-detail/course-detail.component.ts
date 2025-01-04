import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy{
  selectedCourse:Course;
  courseService = inject(CourseService);
  activateRoute:ActivatedRoute = inject(ActivatedRoute);
  selectedCourseObs;
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.selectedCourse = this.courseService.courses.find(c => c.id === id);
    });
    // let id = +this.activateRoute.snapshot.paramMap.get('id');
    // console.log(this.selectedCourse);
    // this.selectedCourse  = this.courseService.courses.find(c => c.id === id);
  }
  ngOnDestroy(): void {
    this.selectedCourseObs.unsubscribe();
  }
}
