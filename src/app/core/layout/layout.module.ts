import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    SideMenuComponent,
    TopBarComponent,
    CollectionComponent,
    NowPlayingComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    SideMenuComponent,
    TopBarComponent,
    CollectionComponent,
    NowPlayingComponent
  ]
})
export class LayoutModule { }
