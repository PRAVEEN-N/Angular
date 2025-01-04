import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{
  selectedCourse:Course;
  courseService = inject(CourseService);
  activateRoute:ActivatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    let id = +this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.selectedCourse);
    this.selectedCourse  = this.courseService.courses.find(c => c.id === id);
  }
}
