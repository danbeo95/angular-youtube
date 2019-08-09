import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import * as fromVideo from '@store/video';
import * as fromRoot from '@store/index';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  videos$: Observable<Array<any>>;
  loading$: Observable<boolean>;
  collectionIds$:Observable<Array<any>>;
  destroy$: Subject<void> = new Subject();
  constructor(
    private store: Store<fromRoot.IAppState>,
    private router:Router
  ) {
    this.videos$ = this.store.select(fromVideo.getAllVideosHome).pipe(takeUntil(this.destroy$));
    this.loading$ = this.store.select(fromVideo.getLoadingHome).pipe(takeUntil(this.destroy$));
  }
  ngOnInit() {
    this.store.dispatch(new fromVideo.LoadVideosHome());
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  onClickVideo(video){
    let videoId = video.contentDetails.upload.videoId;
    this.router.navigate(['video-view',videoId]);
  }
  onScrolled() {
    this.store.select(fromVideo.getNextPageTokenHome).pipe(
      take(1)
    ).subscribe(pageToken => {
      this.store.dispatch(new fromVideo.LoadVideosHome(pageToken));
    })
  }
}
