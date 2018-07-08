import { Component } from '@angular/core';

@Component({
  selector: 'list-employee',
  templateUrl: '/employeeList.component.html'
  //  stylesUrls: [`/employeeList.component.css`]

  
})
export class EmployeeListComponent  {
  employees : any[];
  
  

  constructor(){
    this.employees = [
    { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/5/1988' },
    { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
    { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
    { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
];
}

//added in session 17: ngForTrackBy //it is used for performace 
getEmployees() : void {
  this.employees = [
    { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/6/1988' },
    { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
    { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
    { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '12/8/1980' },
    { code: 'emp105', name: 'Kishore', gender: 'Male', annualSalary: 6500.826, dateOfBirth: '10/14//1990' },
  ];
}
trackByEmpCode(index:number, employee: any):string{
return employee.code;

}

//added in session- 21 
//this will return the total count 
getTotalEmployeeCount(): number{ 
  return this.employees.length; 
}
//this will return the total male count 
getTotalMaleEmployeeCount(): number{
  return this.employees.filter(e=> e.gender ==="Male").length; 
}

//this will return the total Female count 
getTotalFemaleEmployeeCount(): number{
  return this.employees.filter(e=> e.gender ==="Female").length; 
}


} 