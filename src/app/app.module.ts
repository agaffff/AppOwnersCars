import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarOwnerComponent } from './car-owner/car-owner.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryOwnerService } from './car-owner/in-memory-owner.service';


@NgModule({
  declarations: [
    AppComponent,
    CarOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryOwnerService,{delay: 500})
  ],
  providers: [InMemoryOwnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
