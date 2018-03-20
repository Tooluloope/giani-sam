import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './components/faq/faq.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule
  ],
  declarations: [FaqComponent, AboutComponent],
  exports: [
    FaqComponent
  ]
})
export class FaqModule { }
