import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { UserAndAdminComponent } from './user-and-admin/user-and-admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  {
    path: 'user', component: UserComponent, canActivate: [AuthGuard],
    data: {
      role: 'ROLE_USER'
    }
  }, 
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  }, 
  {
    path: 'user-and-admin', component: UserAndAdminComponent, canActivate: [AuthGuard],
    data: {
      role: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
