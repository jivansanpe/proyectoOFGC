import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';

import { MenuComponent } from '../menu/menu.component';

import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PrincipalPage, MenuComponent, IndexComponent, IndexComponent, CreateComponent, EditComponent]
})
export class PrincipalPageModule { }
