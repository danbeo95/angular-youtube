import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import * as fromVideo from '@store/video';
import * as fromRoot from '@store/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
  video$: Observable<any>;
  canShow:boolean = true;
  constructor(
    private store: Store<fromRoot.IAppState>,
    private router: Router
  ) {
    this.video$ = this.store.select(fromVideo.getNowPlaying);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        if(event.urlAfterRedirects.indexOf('video-view') === -1){
          this.canShow = true;
        }
        else{
          this.canShow = false;
        }
      }
    })
  }

  onClickRemove() {
    this.store.dispatch(new fromVideo.RemoveNowPlaying());
  }
}
