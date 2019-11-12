import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [UsersComponent, DataComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: []
})
export class AdminModule {}
