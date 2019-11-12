import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TempComponent } from './temp.component';

@NgModule({
  declarations: [TempComponent],
  imports: [CommonModule, SharedModule],
  exports: [TempComponent]
})
export class TempModule {}
