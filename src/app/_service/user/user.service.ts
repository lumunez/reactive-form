import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map,tap,filter } from 'rxjs/operators';
import { User } from './user';

@Injectable()
export class UserService  {
  private protectedUrl = 'https://my-json-server.typicode.com/volkz/technical-form/users/';
  //private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  public data$: Observable<any>;
  public dataNewUser$: Observable<any>;
  public errorMessage$: string;
  constructor(
    private httpClient: HttpClient
    //private httpHeaders: HttpHeaders
  ) {}

  createUser(user: User) {
    return this.httpClient.post('https://reqres.in/api/users', user);
  }
}
