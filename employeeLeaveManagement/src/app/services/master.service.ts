import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, EarnedLeave, Employee } from '../model/master';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl:string = 'https://projectapi.gerasim.in/api/EmployeeManagement/';
  loggedInUserData: any;
  constructor(private http: HttpClient) { 
    const user = localStorage.getItem('leaveUser');
    if(user) {
      this.loggedInUserData = JSON.parse(user);
    }
  }
  getDepartments(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.apiUrl+'GetParentDepartment');
  }

  getChildDepartments(id:string): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.apiUrl+'GetChildDepartmentByParentId?deptId='+id);
  }

  createEmployee(data:Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl+'CreateEmployee', data);
  };

  getEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl+'GetAllEmployees');
  }

  deleteEmployee(id:number):Observable<APIResponse> {
    return this.http.delete<APIResponse>(this.apiUrl+'DeleteEmployee/'+id);
  }

  getAllChildDepartments():Observable<APIResponse> {
    return this.http.get<APIResponse>(this.apiUrl+'GetAllChildDepartment');
  }

  updateEmployee(emp:Employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiUrl+'UpdateEmployee/'+emp.employeeId, emp);
  };

  getAllEarnedLeaves():Observable<APIResponse> {
    return this.http.get<APIResponse>(this.apiUrl+'GetAllEarnedLeaves');
  }

  createELeave(earnedLeave: EarnedLeave): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.apiUrl+'AddNewEarnedLeave', {});
  }

  getLeaveTypes():Observable<APIResponse> {
    return this.http.get<APIResponse>(this.apiUrl+'GetLeaveTypes');
  }
  
  createLeaveRequest(body:any):Observable<APIResponse> {
    return this.http.post<APIResponse>(this.apiUrl+'CreateNewLeaveRequest', body);
  }

  getEmployeeLeaveRequests(id:number):Observable<APIResponse> {
    return this.http.get<APIResponse>(this.apiUrl+'GetAllLeaveRequestByEmpId?id='+id);
  }

  getAllEmpLeaveRequest():Observable<APIResponse> {
    return this.http.get<APIResponse>(this.apiUrl+'GetAllLeaveRequest');
  }

  changeLeaveStatus(id:number, status:string):Observable<APIResponse> {
    return this.http.get<APIResponse>(this.apiUrl+'ChangeLeaveStatus?leaveId='+id+'&status='+status);
  }
}