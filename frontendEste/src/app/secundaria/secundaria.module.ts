import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecundariaPageRoutingModule } from './secundaria-routing.module';

import { SecundariaPage } from './secundaria.page';



import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecundariaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SecundariaPage, IndexComponent, IndexComponent, CreateComponent, EditComponent]
})
export class SecundariaPageModule {}
