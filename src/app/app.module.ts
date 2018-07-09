import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'; 
import {RouterModule, Routes} from '@angular/router'  //importing the route module 

import { AppComponent } from './app.component'; 
import {PatientComponent } from './patient.component';
import { EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee/employeeList.component'; 
import {EmployeeTitlePipe} from './employee/employeeTitle.pipe';
import {EmployeeCountComponent} from './employee/employeeCount.component';
import {HomeComponent} from './Others/home.component'
import {PageNotFoundComponent} from './Others/pageNotFound.component'

const appRoutes : Routes =[
  { path: 'home', component: HomeComponent } ,  //the user see 'home', he will be navigated to HomeComponent 
  { path: 'employees', component: EmployeeListComponent},
  { path: '',redirectTo: '/home',pathMatch: 'full'},
  { path: '**', component:PageNotFoundComponent}
];
@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,PatientComponent,EmployeeComponent,EmployeeListComponent,EmployeeTitlePipe,
    EmployeeCountComponent,HomeComponent, PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule {

  
 }
