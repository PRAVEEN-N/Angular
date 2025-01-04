import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  searchText:string = '';
  router:Router = inject(Router);
  searchCourse() {
    if(this.searchText) {
      console.log('Search Text:', this.searchText);
      // this.router.navigateByUrl('Courses?search=' + this.searchText);
      this.router.navigate(['Courses'], {queryParams: {search: this.searchText}});
    }
  }
}
