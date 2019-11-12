import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendtestComponent } from './frontendtest/frontendtest.component';

const routes: Routes = [
  {
    path: 'index',
    component: FrontendtestComponent
  },
  {
    path: '**',
    redirectTo: 'frontendtest'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MariaRoutingModule {}
