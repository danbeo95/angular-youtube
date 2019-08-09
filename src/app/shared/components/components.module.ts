import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '@shared/pipes/pipes.module';
import { RouterModule } from '@angular/router';

import { VideoItemComponent } from './video-item/video-item.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CollectionItemComponent } from './collection-item/collection-item.component';


@NgModule({
  declarations: [
    VideoItemComponent,
    VideosListComponent,
    CollectionItemComponent,
    CollectionItemComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    InfiniteScrollModule,
    RouterModule
  ],
  exports: [
    VideoItemComponent,
    VideosListComponent,
    CollectionItemComponent
  ]
})
export class ComponentsModule { }
