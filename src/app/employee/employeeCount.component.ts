import { Component } from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: '/employeeList.component.html'
  //  stylesUrls: [`/employeeList.component.css`]

  
})
export class EmployeeCountComponent  {
  all:number = 10; 
  male: number = 5; 
  female: number = 5 ; 

}


