import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OwnerEntity } from '../OwnerEntity';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-car-owner',
  templateUrl: './car-owner.component.html',
  styleUrls: ['./car-owner.component.css']
})
export class CarOwnerComponent implements OnInit {
  @Output() addEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter<OwnerEntity>();
  @Output() viewEvent = new EventEmitter<OwnerEntity>();


  public selectedOwner!: OwnerEntity;
  public owners!: OwnerEntity[];


  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.shared.getOwners().subscribe(
      data => this.owners = data
    )
  }

  onAdd() {
    this.addEvent.emit();
  }

  onEdit(owner: OwnerEntity) {
    if (owner === undefined) {
      alert("Выберите автовладельца");
    } else {
      console.log(owner);
      this.editEvent.emit(owner);
    }
  }
  onView(owner: OwnerEntity) {
    if (owner === undefined) {
      alert("Выберите автовладельца");
    } else {
      console.log(owner);
      this.viewEvent.emit(owner);
    }
  }
  selectOwner(owner: any) {
    this.selectedOwner = owner;
    console.log(this.selectedOwner);
  }

  onDelete(owner: OwnerEntity) {
    if (owner === undefined) {
      alert("Выберите автовладельца");
    } else {
      this.shared.deleteOwner(owner.id as number).subscribe()
      this.getData();
    }
  }

}
