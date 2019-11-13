//get(url: string, options: {...}): Observable<any>
//post(url: string, body: any|null, options: {...}): Observable<any>
//put(url: string, body: any|null, options: {...}): Observable<any>
//request(first: string|HttpRequest<any>, url?: string, options: {...}): Observable<any>


//patch(url: string, body: any|null, options: {...}): Observable<any>
//delete(url: string, options: {...}): Observable<any>
//head(url: string, options: {...}): Observable<any>
//options(url: string, options: {...}): Observable<any>
//jsonp<T>(url: string, callbackParam: string): Observable<T>

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map,tap } from 'rxjs/operators';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: []
})
export class DataComponent implements OnInit {
  private protectedUrl = 'https://my-json-server.typicode.com/volkz/technical-form/users/';
  private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  public data$: Observable<any>;
  public dataNewUser$: Observable<any>;
  public errorMessage$: string;
  public Arrayuser = {"id": "2","name": "Luis", "surname": "Doe123","identification": "48295522M", "document_type": "DNI", "gender": "man", "email": "ekaterina@gmail.com", "password": "QwErTy@YtReWq"};

  constructor(private httpClient: HttpClient) {}
  ngOnInit() { }

  public getDataRegistros() {
    this.data$ = this.httpClient.get(this.protectedUrl).pipe(map((res) => {return res}));
  }

  //recibe id =2 ejemplo
  public getDatabyUser(id) {
    this.data$ = this.httpClient.get(this.protectedUrl+id).pipe(
      map((res) => {return res}),
      catchError(this.handleError)
    );
  }
  //Envio data

  public getoDatabyUser(arrayuser) {
    //this.data$ = this.httpClient.get(protectedUrl).pipe(map(res => 'Ok'));
    this.data$ = this.httpClient.get(this.protectedUrl).pipe(
      map((res) => {return res}),
      catchError(this.handleError)
    );
  }

  public handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

  //Update userform

  //save(): void {this.heroService.updateHero(this.hero).subscribe(() => this.goBack());}
  //Si se recibio los datos por usuario registrado

  /** PUT: update the user on the server */
  public putJsonData(id,Arrayuser) {
    this.data$ = this.httpClient.put(this.protectedUrl, Arrayuser, this.httpOptions).pipe(
      map((res) => {return res}),
      catchError(this.handleError)
    );
  }

}
