import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../core/api/youtube-api/youtube-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import * as fromVideo from '@store/video';
import * as fromRoot from '@store/index';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-video-view-page',
  templateUrl: './video-view-page.component.html',
  styleUrls: ['./video-view-page.component.scss']
})
export class VideoViewPageComponent implements OnInit {
  video: any;
  videoId: string;
  videos$: Observable<Array<any>>;
  loadingRelated$: Observable<boolean>;
  toggle:boolean;
  constructor(
    private youtubeApiService: YoutubeApiService,
    private route: ActivatedRoute,
    private store: Store<fromRoot.IAppState>
  ) {
    this.videos$ = this.store.select(fromVideo.getAllVideosRelated);
    this.loadingRelated$ = this.store.select(fromVideo.getLoadingRelated);
  }

  ngOnInit() {
    this.onLoadParams();
  }
  onLoadParams() {
    this.route.paramMap.subscribe(params => {
      let videoId = params.get('id');
      this.videoId = videoId;
      this.getVideoDetail(videoId);
      this.store.dispatch(new fromVideo.LoadVideosRelated({ videoId: videoId, nextPageToken: null }))
    })
  }
  toggleIframe(){
    this.toggle = !this.toggle;
  }
  getVideoDetail(videoId) {
    this.youtubeApiService.getVideoDetail(videoId).subscribe(res => {
      this.video = res.items[0];
      // save video to now playing store
      this.store.dispatch(new fromVideo.AddNowPlaying(this.video));
    });
  }
  onScrolled() {
    this.store.select(fromVideo.getNextPageTokenRelated).pipe(
      take(1)
    ).subscribe(token => {
      this.store.dispatch(new fromVideo.LoadMoreVideosRelated({ videoId: this.videoId, nextPageToken: token }));
    })
  }
}
