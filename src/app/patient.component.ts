import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-patient',
  templateUrl: 'patient.component.html'
  //styles: [`h1 { font-family: Lato; }`]

  
})
export class PatientComponent  {
   firstName : string = "Kishore";
  lastName : string = "Maroju";
  gender : string = "Male";
  age : number =27;

}
