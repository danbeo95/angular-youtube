import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TrendingRoutingModule } from './trending-routing.module';

import { TrendingPageComponent } from './containers/trending-page/trending-page.component';

@NgModule({
  declarations: [
    TrendingPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TrendingRoutingModule
  ]
})
export class TrendingModule { }
