import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistosoPage } from './vistoso.page';

const routes: Routes = [
  {
    path: '',
    component: VistosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistosoPageRoutingModule {}
