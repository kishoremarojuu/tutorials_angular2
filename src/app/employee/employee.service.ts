import {Injectable} from '@angular/core';
import {IEmployee} from './employee'; 
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 

@Injectable()
export class EmployeeService {


    constructor(private _http: Http){ }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:8080/employees")
                         .map((response : Response)=> <IEmployee[]>response.json())
                         .catch(this.handleError);                 
    }   
    handleError(error:Response){
        console.error(error);
        return Observable.throw(error); 
    }
        //this is hard coded data in the service class 
        /*getEmployees(): IEmployee[]{
            return[
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/6/1988' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '12/8/1980' },
            { code: 'emp105', name: 'Kishore', gender: 'Male', annualSalary: 6500.826, dateOfBirth: '10/14//1990' },
            { code: 'emp106', name: 'Divya', gender: 'Female', annualSalary: 5455.826, dateOfBirth: '10/15//1890' }
        ] 
        }*/
    
}
