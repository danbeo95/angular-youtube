import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap, take, filter, map } from 'rxjs/operators';

import * as fromVideo from '@store/video';
import * as fromRoot from '@store/index';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  videos$: Observable<Array<any>>;
  loading$: Observable<boolean>;
  searchQuery: string;
  constructor(
    private route: ActivatedRoute,
    private store: Store<fromRoot.IAppState>
  ) {
    this.videos$ = this.store.select(fromVideo.getAllVideosSearch);
    this.loading$ = this.store.select(fromVideo.getLoadingSearch);
  }

  ngOnInit() {
    console.log('initial search')
    this.onLoadParams();
  }
  onLoadParams() {
    this.route.queryParamMap.pipe(
      filter(params => params.get('q') !== null),
      map(params => params.get('q'))
    ).subscribe(q => {
      this.searchQuery = q;
      this.store.dispatch(new fromVideo.SearchVideos({ query: q, nextPageToken: null }))
    })
  }

  onScrolled() {
    this.store.select(fromVideo.getNextPageTokenSearch).pipe(
      take(1)
    ).subscribe(token => {
      this.store.dispatch(new fromVideo.LoadMoreVideosSearch({ query: this.searchQuery, nextPageToken: token }))
    })
  }
}
