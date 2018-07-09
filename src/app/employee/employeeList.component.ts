import { Component,OnInit } from '@angular/core';
import {IEmployee} from './employee';
import {EmployeeService} from './employee.service'; 
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan'; 
import {ISubscription} from 'rxjs/Subscription'

@Component({
  selector: 'list-employee',
  templateUrl: '/employeeList.component.html',
  //  stylesUrls: [`/employeeList.component.css`]
  providers: [EmployeeService] //registering employee service with anuglar dependency injection 

  
})
export class EmployeeListComponent implements OnInit {
  employees : IEmployee[];
  
  

 /* constructor(){
    this.employees = [
    { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/5/1988' },
    { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
    { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
    { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
];
}*/

//adding the service class in session-25 , geetting the data from service class 
selectedEmployeeCountRadioButtom: string = "All"; 

statusMessage: string //adding this property to show http errors to the user 

subscription: ISubscription; 

constructor(private _employeeService : EmployeeService){
 // this.employees = this._employeeService.getEmployees(); //you can always have this line here, the best way is calling from life cycle method ngOnit
}

onCancelButtonClick(): void {
  this.statusMessage = "request cancelled";
  this.subscription.unsubscribe(); 
}
ngOnInit(){
  //this.employees = this._employeeService.getEmployees(); 
  this.subscription=  this._employeeService.getEmployees()
                      //  .retry() //this will keep retrying  the service 
                      //.retryWhen((err) => err.delay(1000))   //this will try to connect to the service giving 2 seconds pause 
                      .retryWhen((err) =>  {   //this will retry for 5 seconds and then give up 
                           return err.scan((retryCount)=>{
                             retryCount += 1;
                            if(retryCount<6){
                              this.statusMessage = "Retrying...Attempt #" + retryCount;
                              return retryCount;
                            }else{
                              throw(err);
                            }
                           },0).delay(1000)
                          })
                       .subscribe((employeeData)=>this.employees = employeeData,
                       (error) =>{
                         this.statusMessage = 'Please try again after some time'; 
                       }
                      ); 
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