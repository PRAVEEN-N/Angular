import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { APIResponse, EarnedLeave, Employee } from 'src/app/model/master';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-earned-leave',
  templateUrl: './earned-leave.component.html',
  styleUrls: ['./earned-leave.component.css'],
})
export class EarnedLeaveComponent implements OnInit {
  earnedLeaves: EarnedLeave[] = [];
  masterSrv = inject(MasterService);
  employee$: Observable<Employee[]> = new Observable<Employee[]>();

  form: FormGroup = new FormGroup({});

  constructor() {
    this.employee$ = this.masterSrv.getEmployees();
    this.intializeForm();
  }
  ngOnInit(): void {
    this.getAllEleaves();
    // this.getAllEmployees();
    this.intializeForm();
  }
  intializeForm() {
    this.form = new FormGroup({
      earnedLeaveId: new FormControl(0),
      employeeId: new FormControl(),
      totalEarnedLeaves: new FormControl(0),
      lastUpdatedDate: new FormControl(new Date()),
    });
  }

  // getAllEmployees() {
  //   this.masterSrv.getEmployees().subscribe((resp: Employee[]) => {
  //     this.employeeList = resp; 
  //   });
  // }
  onSave() {
    const formValue = this.form.value;
    console.log(formValue);
    this.masterSrv.createELeave(this.form.value).subscribe((resp: APIResponse) => {
      console.log(resp);
      this.getAllEleaves(); 
    });
  }

  getAllEleaves() {
    this.masterSrv.getAllEarnedLeaves().subscribe((resp: APIResponse) => {
      this.earnedLeaves = resp.data;
    });
  }
}
