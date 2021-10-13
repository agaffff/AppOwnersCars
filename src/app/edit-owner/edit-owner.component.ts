import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarEntity } from '../CarEntity';
import { ValidatorService } from '../validator.service';
import { OwnerEntity } from '../OwnerEntity';
import { SharedService } from '../shared.service';
import { wrongNumberCarValidator } from './wrong-numberCar.validator';

@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.css']
})
export class EditOwnerComponent implements OnInit {
  myForm!: FormGroup;
  @Output() onExit = new EventEmitter();
  @Input() owner?: OwnerEntity | null;
  @Input() isReadOnly!: boolean;

  public owners!: OwnerEntity[];
  public atrControl = "";
  public hidden="";

  constructor(private fb: FormBuilder, private shared: SharedService, private validatorServ: ValidatorService) {
  }

  ngOnInit(): void {
    console.log(this.atrControl)
    console.log(this.hidden)

    
    if (this.owner) {
      this._setEditForm(this.owner);

      if (this.isReadOnly) {
        this.atrControl = "readonly";
        this.hidden="hidden";
      } else {
        this.atrControl = "";
        this.hidden="";
      }
    }
    else {
      this._createForm();
    }
  }

  private _createForm() {
     this.myForm = this.fb.group({
      id: null,
      aLastName: ['', [Validators.required]],
      aFirstName: ['', [Validators.required]],
      aMiddleName: ['', [Validators.required]],
      aCars: this.fb.array([this.createCar()])
    });
  }

  //заполнение контролов формы при редактировании/просмотре
  private _setEditForm(owner: OwnerEntity) {
    this.myForm = this.fb.group({
      id: [owner.id],
      aLastName: [owner.aLastName, [Validators.required]],
      aFirstName: [owner.aFirstName, [Validators.required]],
      aMiddleName: [owner.aMiddleName, [Validators.required],wrongNumberCarValidator(this.validatorServ)],
      aCars: this.fb.array([])
    });

    //заполняем данными об автомобилях владельца
    let cars = this.myForm.get('aCars') as FormArray;
    owner.aCars.forEach(element => {
      cars.push(this.setCars(element));
    });
  }


  //#region Для динамического создания контролов автомобилей
  createCar() {
    return this.fb.group({
      numberCar: ['', Validators.compose([Validators.required, Validators.pattern (/^[ABCEHIKMOPTX]{2}\d{4}(?<!0{4})[ABCEHIKMOPTX]{2}$/)]),wrongNumberCarValidator(this.validatorServ)],
      brandCar: ['', [Validators.required]],
      modelCar: ['', [Validators.required]],
      yearCar: [null, Validators.compose([Validators.required, Validators.min(1991), Validators.max((new Date()).getFullYear())])],
    });
  }

  setCars(car: CarEntity) {
    return this.fb.group({
      numberCar:[car.numberCar, [Validators.required, Validators.pattern (/^[ABCEHIKMOPTX]{2}\d{4}(?<!0{4})[ABCEHIKMOPTX]{2}$/)],wrongNumberCarValidator(this.validatorServ)],
      brandCar: [car.brandCar, [Validators.required]],
      modelCar: [car.modelCar, [Validators.required]],
      yearCar: [car.yearCar, [Validators.required, Validators.min(1991), Validators.max((new Date()).getFullYear())]]
    })
  };

  addNextCar() {
    (this.myForm.get('aCars') as FormArray).push(this.createCar())
  }

  getControls() {
    return (this.myForm.get('aCars') as FormArray).controls;
  }

  get acars(): FormArray {
    return this.myForm.get('aCars') as FormArray;
  } 
  //#endregion

  onSubmit() {
    if (this.myForm.valid) {
      if (this.owner) {
        let ownerEdit = this.myForm.value as OwnerEntity;
        this.shared.editOwner(ownerEdit).subscribe();
      }
      else {
        let ownerNew = this.myForm.value as OwnerEntity;
        this.shared.createOwner(ownerNew.aLastName, ownerNew.aFirstName, ownerNew.aMiddleName, ownerNew.aCars).subscribe();
      }
      this.myForm.reset();
      this.atrControl = "";
      this.hidden="";
      this.exitForm();
    }
    
  }

  exitForm() {
    this.onExit.emit();
  }

  deleteCar(item: AbstractControl)
  {
    const arr: FormArray = this.myForm.get('aCars') as FormArray;
    let indx = arr.controls.indexOf(item);
    arr.removeAt(indx);
  }
}