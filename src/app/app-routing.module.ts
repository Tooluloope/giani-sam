import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/core/core.module#CoreModule'
  },
  {
    path: '',
    loadChildren: 'app/faq/faq.module#FaqModule'
  },
  {
    path: '',
    loadChildren: 'app/auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
