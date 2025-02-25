import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { APIResponse, Employee } from 'src/app/model/master';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-new-leave',
  templateUrl: './new-leave.component.html',
  styleUrls: ['./new-leave.component.css']
})
export class NewLeaveComponent implements OnInit{
  form:FormGroup = new FormGroup({});
  leaveTypes:any=  [];
  employees: Employee[] = [];
  employeeRole='';
  leaveReqs:any = [];
  constructor(private masterSrv:MasterService) {
    this.employeeRole = this.masterSrv.loggedInUserData.role;
  }

  ngOnInit(): void {
    this.intializeForm();
    this.getAllLeaveTypes();
    this.getEmployees();
    if(this.masterSrv.loggedInUserData.role == 'Employee') {
      this.form.controls['employeeId'].disable();
      this.getEmployeeLeaveReqs();
    } else {
      this.getAllEmployessLeaveRequests();
    }

  }
  intializeForm() {
    console.log(this.masterSrv.loggedInUserData.employeeId, 'EIDDD');
    this.form = new FormGroup({
      leaveId: new FormControl(0),
      employeeId: new FormControl(this.masterSrv.loggedInUserData.employeeId),
      leaveTypeId: new FormControl(0),
      startDate: new FormControl(""),
      endDate: new FormControl(""),
      status: new FormControl("New"),
      reason: new FormControl(""),
      requestDate: new FormControl(new Date())
    })
  }

  getAllLeaveTypes() {
    this.masterSrv.getLeaveTypes().subscribe((res:APIResponse) => {
      this.leaveTypes = res.data;
    });
  }

  getEmployees() {
    this.masterSrv.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data; 
    });
  }

  createLeaveReq() {
    const formValue = this.form.getRawValue(); // As the employeeId is disabled we will not get that if we use this.form.value that's why we are using getRawValue()
    debugger;
    this.masterSrv.createLeaveRequest(formValue).subscribe((res: APIResponse) => {
      if(res.result)
        alert('Request Raised');
      else
        alert(res.message);
    });
  }

  getEmployeeLeaveReqs() {
    this.masterSrv.getEmployeeLeaveRequests(this.masterSrv.loggedInUserData.employeeId).subscribe((res:APIResponse) => {
      this.leaveReqs = res.data;
    });
  }

  getAllEmployessLeaveRequests() {
    this.masterSrv.getAllEmpLeaveRequest().subscribe((res:APIResponse) => {
      this.leaveReqs = res.data;
    });
  }

  changeLeaveReqStatus(id:number) {
    this.masterSrv.changeLeaveStatus(id, 'Approved').subscribe((res:APIResponse) => {
      this.getEmployeeLeaveReqs();
    });
  }
  
}
