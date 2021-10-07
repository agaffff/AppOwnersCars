import { Component, OnInit } from '@angular/core';
import { OwnerEntity } from '../OwnerEntity';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-car-owner',
  templateUrl: './car-owner.component.html',
  styleUrls: ['./car-owner.component.css']
})
export class CarOwnerComponent implements OnInit {
  owners!: OwnerEntity[];

  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
    this.shared.getOwners().subscribe(
      data  => this.owners = data
    )
  }
}
