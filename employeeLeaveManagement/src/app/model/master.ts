export class Employee {
    employeeId: number
    employeeName: string
    contactNo: string
    emailId: string
    deptId: number
    password: string
    gender: string
    role: string

    constructor() {
        this.employeeId = 0
        this.employeeName = ''
        this.contactNo = ''
        this.emailId = ''
        this.deptId = 0
        this.password = ''
        this.gender = '',
        this.role = 'employee'
    }
  
}

export interface ParentDept {
    departmentId: number,
    departmentName: string,
    departMentLogo: string
}


export interface ChildDept {
    departmentId: number,
    departmentName: string,
    parentDeptId: string,
    childDeptId:string
}

export interface APIResponse {
    message:string,
    result:string,
    data:any
}

export interface EarnedLeave {
    earnedLeaveId: number
    employeeId: number
    totalEarnedLeaves: number
    totalSickEarnedLeaves: number
    lastUpdatedDate: string
    employeeName: string
}
  