import { Component } from '@angular/core';
import { ICanDeactivateComp } from '../auth.guard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements ICanDeactivateComp{
  firstName: string = '';
  lastName: string = '';
  message: string = '';
  country: string = 'usa';
  isSubmitted: boolean = false;
  canExit(): boolean {
    console.log(this.firstName, this.lastName, this.message, this.isSubmitted);
      if((this.firstName || this.lastName || this.message) ){
          return confirm('You have unsaved changes. Do you really want to exit?');
      }
      return true;
  }
  onSubmit(){
    this.isSubmitted = true;
  }
}
