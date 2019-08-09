import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ComponentsModule,
    InfiniteScrollModule,
    PipesModule
  ]
})
export class SharedModule { }
