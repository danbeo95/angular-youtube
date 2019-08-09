import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import * as fromVideo from '@store/video';
import * as fromRoot from '@store/index';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.scss']
})
export class TrendingPageComponent implements OnInit,OnDestroy {
  videos$: Observable<Array<any>>;
  loading$:Observable<boolean>;
  destroy$: Subject<void> = new Subject();
  constructor(
    private store: Store<fromRoot.IAppState>,
    private router:Router
  ) {
    this.videos$ = this.store.select(fromVideo.getAllVideosTrending);
    this.loading$ = this.store.select(fromVideo.getLoadingTrending);
  }

  ngOnInit() {
    this.store.dispatch(new fromVideo.LoadVideosTrending());
  }

  ngOnDestroy(){
    this.destroy$.next();
  }

  onScrolled() {
    this.store.select(fromVideo.getNextPageTokenTrending).pipe(
      takeUntil(this.destroy$),
      take(1)
    ).subscribe(token => {
      this.store.dispatch(new fromVideo.LoadVideosTrending(token));
    })
  }
  onClickVideo(video){
    let videoId = video.id;
    this.router.navigate(['video-view',videoId]);
  }
}
