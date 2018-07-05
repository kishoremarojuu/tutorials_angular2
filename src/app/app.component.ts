
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:/* `
      <div><h1>{{pageHeader}}</h1>
          <my-patient></my-patient>
          <my-employee></my-employee>
      </div>
  `*/

  //Session : 15, two way databinding
    /*
    `
      Name: <input [(ngModel)]= 'name'/>
      <br/>
      You entered :{{name}}
     `
     */

     //Sesion: 16, ngFor Directive
     `<list-employee></list-employee> 
     `
  
})
export class AppComponent  {
  //pageHeader : string = "Employee Details";
  
  // two-way data binding 
  name : string = "Tom"; 

}
 