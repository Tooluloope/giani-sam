import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { ForumComponent } from './components/forum/forum.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home: Giani Sam' }
  },
  {
    path: 'my/profile',
    component: ProfileComponent
  },
  {
    path: 'my/profile/farmer',
    component: FarmerComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
