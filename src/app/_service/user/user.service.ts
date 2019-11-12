import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserService {
    protectedUrl = 'https://my-json-server.typicode.com/volkz/technical-form/users/';
    constructor(private http: HttpClient) { }

    updateUserData(user: User): Observable<User> {
      let httpHeaders = new HttpHeaders({
      	'Content-Type' : 'application/json',
      	'Cache-Control': 'no-cache'
      });
      let options = {
         headers: httpHeaders
       };
       return this.httpClient.post<User>(this.protectedUrl, user, options);
    }
}
