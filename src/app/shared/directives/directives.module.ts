import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoveFrameDirective } from './move-ifame/move-frame.directive';

@NgModule({
  declarations: [
    MoveFrameDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoveFrameDirective
  ]
})
export class DirectivesModule { }
