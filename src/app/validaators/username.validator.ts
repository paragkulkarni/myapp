import { FormControl } from '@angular/forms';


export class UsernameValidator {
  static validUsername(fc: FormControl) {
    console.log("validator");
    if(fc.value.toLowerCase() === "parag" ){
      return ({validUsername: true});
    } else {
      return (null);
    }
  }
}