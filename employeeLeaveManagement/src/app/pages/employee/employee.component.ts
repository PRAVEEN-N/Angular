import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, ChildDept, Employee, ParentDept } from 'src/app/model/master';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  employee: Employee = new Employee();
  parentDeptId:string = '';
  parentDeptList: ParentDept[] = [];
  childDeptList: ChildDept[] = [];
  masterSrv = inject(MasterService);
  employeeList: Employee[] = [];

  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
  }

  loadDepartments() {
    this.masterSrv.getDepartments().subscribe((data:APIResponse) => {
        this.parentDeptList = data.data;
    });
  }

  loadChildDepartments() {
    this.masterSrv.getChildDepartments(this.parentDeptId).subscribe((data:APIResponse) => {
      this.childDeptList = data.data;
    });
  }

  onSubmit() {
    this.masterSrv.createEmployee(this.employee).subscribe((data:Employee) => {
      console.log('data', data);
      this.loadEmployees();
    });
  }

  loadEmployees() {
    this.masterSrv.getEmployees().subscribe((data: Employee[]) => {
      this.employeeList = data; 
    });
  }

  onEdit(employee: Employee) {
    this.employee = employee;
    this.getChildDepts();
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete?');
    if(!isDelete) {
      return;
    }
    this.masterSrv.deleteEmployee(id).subscribe((data:APIResponse) => {
      console.log('delete response', data);
      this.loadEmployees();
    });
  }

  getChildDepts() {
    this.masterSrv.getAllChildDepartments().subscribe((res:APIResponse) => {
      console.log('child depts', res.data);
      this.childDeptList = res.data;
    });
  }

  onUpdate() {
    this.masterSrv.updateEmployee(this.employee).subscribe((data:Employee) => {
      console.log('update response', data);
      this.loadEmployees();
    });
  }
  
}
