import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { ShopComponent } from './components/shop/shop.component';
import { ForumComponent } from './components/forum/forum.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ProfileComponent,
    FarmerComponent,
    ShopComponent,
    ForumComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [

  ]
})
export class CoreModule { }
