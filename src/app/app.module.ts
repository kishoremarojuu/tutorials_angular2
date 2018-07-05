import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component'; 
import {PatientComponent } from './patient.component';
import { EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee/employeeList.component'; 
import {EmployeeTitlePipe} from './employee/employeeTitle.pipe';
import {EmployeeCountComponent} from './employee/employeeCount.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,PatientComponent,EmployeeComponent,EmployeeListComponent,EmployeeTitlePipe,
    EmployeeCountComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

  
 }
