import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FrontendtestComponent } from './frontendtest/frontendtest.component';
import { MariaRoutingModule } from './maria-routing.module';

@NgModule({
  declarations: [FrontendtestComponent],
  imports: [CommonModule, MariaRoutingModule],
  providers: []
})
export class MariaModule {}
