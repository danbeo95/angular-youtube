import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url/safe-url.pipe';
import { InCollectionPipe } from './in-collection/in-collection.pipe';

@NgModule({
  declarations: [
    SafeUrlPipe,
    InCollectionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafeUrlPipe,
    InCollectionPipe
  ]
})
export class PipesModule { }
