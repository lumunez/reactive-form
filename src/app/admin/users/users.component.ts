import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map,tap } from 'rxjs/operators';

//import { User } from './user';
import { UserService } from '../../_service/user/user.service';
import { User } from '../../_service/user/user';
import {Item} from   '../../_service/document/types_document_type';
import {ITEMS} from  '../../_service/document/types_document_type_data';
import {Itemg} from  '../../_service/gender/gener_user';
import {ITEMSG} from '../../_service/gender/gener_user_data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})


export class UsersComponent implements OnInit {
  //rest
  private protectedUrl = 'https://my-json-server.typicode.com/volkz/technical-form/users/';
  private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  public data$: Observable<any>;
  public dataNewUser$: Observable<any>;
  public errorMessage$: string;
  public userId: Observable<any>;

//form-select
  public optiopnTypeSel;
  public optionTypeDocumentSelectedString;
  public optionTypeDocumentSelecteditemsList = ITEMS;
	public optionTypeDocumentSelected = "0";

  //form-checkbox
  public generSel;
  public generSelectedString;
  public generSelecteditemsList = ITEMSG;
  public generSelected = "0";
  submitted = false;
  dataModel;
  form;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    //private httpHeaders: HttpHeaders,
    private userService: UserService,
    public router: Router
  ){
    this.form = formBuilder.group({
      name: [''],
      surname: [''],
      document_type: [''],
      identification: [''],
      datedd: [''],
      datemm: [''],
      dateyyyy: [''],
      gender: [''],
      email: [''],
      reemail: [''],
      password: [''],
      repassword: ['']
    });
    //this.data = new UserData();
  }

  ngOnInit() {
    this.data$ = this.httpClient.get(this.protectedUrl).pipe(map((res) => {return res}));
  } // You may show error message on the template

  public getDataRegistros() {
    this.data$ = this.httpClient.get(this.protectedUrl).pipe(map((res) => {return res}));
  }

  private getUserById(id) {
    this.data$ = this.httpClient.get(this.protectedUrl+id).pipe(map((res) => {return res}));
    return this.httpClient.get(this.protectedUrl+id).subscribe((userdata : any)=>{
      console.log(userdata);
      this.form.get('name').setValue(userdata.name);
      this.form.get('surname').setValue(userdata.surname);
      this.form.get('identification').setValue(userdata.identification);
      this.form.get('document_type').setValue(userdata.document_type);
      this.form.get('email').setValue(userdata.email);
      this.form.get('password').setValue(userdata.password);
      this.form.get('gender').setValue(userdata.gender);
    });
  }

  public udateBTN() {
    if ((this.form.value === "") || this.form.value === null){
      this.data$ = this.httpClient.post(this.protectedUrl, this.form.value).pipe(map((res) => {return res}));
    }
    else {
      this.data$ = this.httpClient.put(this.protectedUrl+2, this.form.value).pipe(map((res) => {return res}));
    }
  }

  resetform(){
    this.form.reset();
  }

}



//aádir valores por defecto
// this.miFormulario.setValue(this.usuario);
//suscripcion
//this.miFormulario.controls['username'].valueChanges.subscribe(data => {
//  console.log(data);});
