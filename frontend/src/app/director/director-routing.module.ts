import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'director', redirectTo: 'director/index', pathMatch: 'full'},
  { path: 'director/index', component: IndexComponent },
  { path: 'director/create', component: CreateComponent },
  { path: 'director/edit/:id', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorRoutingModule { }
