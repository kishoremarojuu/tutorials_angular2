import { Component } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: 'app/employee/employee.component.html'
  //styleUrls: [ './app.component.css' ]
})
export class EmployeeComponent  {
  firstName : string = "Kishore";
  lastName : string = "Maroju";
  gender : string = "Male";
  age : number =27;

}
