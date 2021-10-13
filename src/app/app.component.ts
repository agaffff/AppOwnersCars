import { Component, OnInit } from '@angular/core';
import { OwnerEntity } from './OwnerEntity';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService]
})
export class AppComponent implements OnInit {

  title = 'car-owners';

  public formOpen = false;
  public editOwner?: OwnerEntity | null;
  public isReadOnly = false;

  ngOnInit(): void {
  }

  onAdding() {
    this.formOpen = true;
  }

  closeForm() {
    this.formOpen = false;
    this.editOwner = null;
  }

  onEditing(owner: OwnerEntity) {
    this.editOwner = owner;
    this.formOpen = true;
    this.isReadOnly = false;
  }

  onViewing(owner: OwnerEntity) {
    this.editOwner = owner;
    this.formOpen = true;
    this.isReadOnly = true;
  }

}
