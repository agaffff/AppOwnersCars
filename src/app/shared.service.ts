import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarOwnersService } from './ICarOwnersService';
import { OwnerEntity } from './OwnerEntity';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements ICarOwnersService{

  ownersUrl = 'api/owners';
  
  constructor(private http: HttpClient) { }

  getOwners(): Observable<OwnerEntity[]> {
    return this.http.get<OwnerEntity[]>(this.ownersUrl);
  }
  
  getOwnerById(aId: number): Observable<OwnerEntity> {
    throw new Error('Method not implemented.');
  }
  createOwner(aLastName: string, aFirstName: string, aMiddleName: string, aCars: any[]): Observable<OwnerEntity> {
    throw new Error('Method not implemented.');
  }
  editOwner(aOwner: OwnerEntity): Observable<OwnerEntity> {
    throw new Error('Method not implemented.');
  }
  deleteOwner(aOwnerId: number): Observable<OwnerEntity[]> {
    throw new Error('Method not implemented.');
  }
}
