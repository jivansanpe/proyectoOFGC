import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';
import { MenuComponent } from '../menu/menu.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule
  ],
  declarations: [PrincipalPage, MenuComponent, IndexComponent]
})
export class PrincipalPageModule {}
