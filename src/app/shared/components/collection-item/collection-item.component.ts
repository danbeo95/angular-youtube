import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {
  @Input() video;
  @Output() remove:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  onClickRemove(){
    let videoId = this.video.id;
    this.remove.emit(videoId);
  }
}
