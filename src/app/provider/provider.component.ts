import { Component } from '@angular/core';

@Component({
  selector: 'my-provider',
  templateUrl: 'app/provider/provider.component.html'
  //styleUrls: [ './app.component.css' ]
})
export class ProviderComponent  {
  providerFirstname : string = "Kishore";
  providerLastname : string = "Maroju";
  providerGender : string = "Male";
  ProviderAge : number =27;

}
