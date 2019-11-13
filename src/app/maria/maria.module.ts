import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MariaRoutingModule } from './maria-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MariaRoutingModule],
  providers: []
})
export class MariaModule {}
