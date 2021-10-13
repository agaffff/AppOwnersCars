import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { OwnerEntity } from './OwnerEntity';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public owners!: OwnerEntity[]
  constructor(private sharedSerice: SharedService) { }

  public checkNumberCar(numberCar: string) {
    let res: boolean = true;

    this.sharedSerice.getOwners().subscribe(data => {
      this.owners = data;
      
    })
    
    if (this.owners !== undefined && this.owners.length > 0) {
      this.owners.forEach(owner => {
        if(owner.aCars.find(r=> r.numberCar === numberCar) !== undefined)
            res = false
        });
      };
    
    //если мы возвращаем true то валидация проходит/ false=ошибка
    return of({ isNumberCarAvailable: res });
  }
}
