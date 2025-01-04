import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];
  router: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToCourses() {
    // this.router.navigate(['Courses']);// It concatenates all the paths in array to form a single path. By default it is absolute path. If you want to make it relative path, you can use relativeTo property.
    // this.router.navigate(['Courses'], {relativeTo: this.activatedRoute});// It makes the path relative to the current path.
    this.router.navigateByUrl('Courses');// It is used to navigate to the path. It is similar to navigate method but it takes string as argument.
  }
}
