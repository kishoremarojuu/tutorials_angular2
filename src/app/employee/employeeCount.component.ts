import { Component , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: '/employeeCount.component.html'
  //  stylesUrls: [`/employeeList.component.css`]

  
})
export class EmployeeCountComponent  {
  @Input()
  all:number;  
  @Input()
  male: number ; 
  @Input()
  female: number ; 


}






