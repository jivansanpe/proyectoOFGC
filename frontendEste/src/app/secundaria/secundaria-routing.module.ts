import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecundariaPage } from './secundaria.page';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: SecundariaPage
  },
  { path: 'secundaria', redirectTo: 'secundaria/index', pathMatch: 'full'},
  { path: 'secundaria/index', component: IndexComponent },
  { path: 'secundaria/create', component: CreateComponent },
  { path: 'secundaria/edit/:id', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecundariaPageRoutingModule {}
