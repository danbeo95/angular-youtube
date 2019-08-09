import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreStoreModule } from './store';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { appEffects } from './effects';

import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreStoreModule,
    HttpClientModule,
    EffectsModule.forRoot(appEffects),
  ],
  exports:[
    LayoutModule
  ]
})
export class CoreModule { }
