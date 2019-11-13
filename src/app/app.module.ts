import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './maria/home/home.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './_service/user/user.service';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, ReactiveFormsModule, FormsModule // cargamos el módulo en el array de imports
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
