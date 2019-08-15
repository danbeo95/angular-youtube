import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromCollection from '@store/collection';
import * as fromRoot from '@store/index';
import { Store } from '@ngrx/store';
import { AppUtils } from '@core/app-utils';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosListComponent implements OnInit {
  @Input('videos') videos$: Observable<Array<any>>;
  @Input('loading') loading$: Observable<boolean>;
  @Input() infiniteScrollContainer: string;
  @Output() scrolled: EventEmitter<void> = new EventEmitter();
  @Output() scroll:EventEmitter<void> = new EventEmitter();
  collectionIds$: Observable<Array<number | string>>;
  constructor(
    private store: Store<fromRoot.IAppState>
  ) {
    this.collectionIds$ = this.store.select(fromCollection.getCollectionIds);
  }

  ngOnInit() {
  }
  onScrolled() {
    this.scrolled.emit();
  }
  onAddToCollection(video) {
    // because each result of youtube api return  diffirence id .so you must filter id base on result
    video.id = AppUtils.filterVideoId(video);
    this.store.dispatch(new fromCollection.AddToCollection(video));
  }
  onRemoveToCollection(videoId:string){
    this.store.dispatch(new fromCollection.RemoveToCollection(videoId));
  }
  onScroll(){
    this.scroll.emit();
  }
}