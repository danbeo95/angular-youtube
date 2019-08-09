import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { AppUtils } from '@core/app-utils';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoItemComponent implements OnInit {
  @Input() video: any;
  @Input() inCollection:boolean;
  @Output() removeCollection: EventEmitter<any> = new EventEmitter();
  @Output() addCollection: EventEmitter<any> = new EventEmitter();
  videoId:string;
  constructor() {}

  ngOnInit() {
    this.videoId = AppUtils.filterVideoId(this.video);
  }

  addToCollection(){
    this.addCollection.emit({...this.video});
  }
  removeToCollection(){
    let videoId = AppUtils.filterVideoId(this.video)
    this.removeCollection.emit(videoId);
  }
}
