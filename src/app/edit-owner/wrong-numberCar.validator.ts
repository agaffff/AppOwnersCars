import { FormControl } from "@angular/forms";
import { timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ValidatorService } from "../validator.service";


export const wrongNumberCarValidator = 
  (validatorService: ValidatorService, time: number = 0) => {
    return (input: FormControl) => {
      return timer(time).pipe(
        switchMap(() => validatorService.checkNumberCar(input.value)),
        map(res => {
          return res.isNumberCarAvailable ? null : {NumberCarExist: true}
        })
      );
    };
  };


