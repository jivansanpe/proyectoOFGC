import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'event', redirectTo: 'event/index', pathMatch: 'full'},
  { path: 'event/index', component: IndexComponent },
  { path: 'event/create', component: CreateComponent },
  { path: 'event/edit/:id', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
