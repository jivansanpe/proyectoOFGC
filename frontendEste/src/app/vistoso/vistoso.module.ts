import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistosoPageRoutingModule } from './vistoso-routing.module';

import { VistosoPage } from './vistoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistosoPageRoutingModule
  ],
  declarations: [VistosoPage]
})
export class VistosoPageModule {}
