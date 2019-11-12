import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UserData } from './user-data';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_path = 'https://my-json-server.typicode.com/volkz/technical-form/users';
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getUsuariosListado(){
    return this.httpClient.get('https://my-json-server.typicode.com/volkz/technical-form/users');
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  createItem(item): Observable<UserData> {
    return this.httpClient
      .post<UserData>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}



//const urlapi = 'https://my-json-server.typicode.com/volkz/technical-form/users';
//getUsers() {  return this.http.get(urlapi);}
