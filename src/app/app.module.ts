import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarOwnerComponent } from './car-owner/car-owner.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryOwnerService } from './car-owner/in-memory-owner.service';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { ValidatorService } from './validator.service';


@NgModule({
  declarations: [
    AppComponent,
    CarOwnerComponent,
    EditOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryOwnerService),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InMemoryOwnerService, SharedService, ValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
