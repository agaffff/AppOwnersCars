import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ICarOwnersService } from './ICarOwnersService';
import { OwnerEntity } from './OwnerEntity';
import { catchError } from 'rxjs/operators';
import { CarEntity } from './CarEntity';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements ICarOwnersService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  ownersUrl = 'api/owners';

  constructor(private http: HttpClient) { }

  getOwners(): Observable<OwnerEntity[]> {
    return this.http.get<OwnerEntity[]>(this.ownersUrl).pipe(
      catchError(this.handleError));
  }

  getOwnerById(aId: number): Observable<OwnerEntity> {
    const url = `${this.ownersUrl}/${aId}`;

    return this.http.get<OwnerEntity>(url).pipe(
      catchError(this.handleError)
    );
  }

  createOwner(aLastName: string,
    aFirstName: string,
    aMiddleName: string,
    aCars: CarEntity[]): Observable<OwnerEntity> {

    let owner: OwnerEntity = {
      id: null,
      aLastName: aLastName,
      aFirstName: aFirstName,
      aMiddleName: aMiddleName,
      aCars: aCars
    }

    return this.http.post<OwnerEntity>(this.ownersUrl, owner, this.httpOptions).pipe(
      catchError(this.handleError));
  }

  editOwner(aOwner: OwnerEntity): Observable<OwnerEntity> {
    return this.http.put<OwnerEntity>(this.ownersUrl, aOwner, this.httpOptions).pipe(
      catchError(this.handleError));
  }

  deleteOwner(aOwnerId: number): Observable<OwnerEntity> {
    const id = aOwnerId;
    const url = `${this.ownersUrl}/${id}`;
    return this.http.delete<OwnerEntity>(url, this.httpOptions).pipe(
      catchError(this.handleError));
  }

  private handleError(error: any) {
    //логирование  ошибок в консоль
    console.error(error);
    return throwError(error);
  }
}
