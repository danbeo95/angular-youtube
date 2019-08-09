import { Injectable } from "@angular/core";
import { YoutubeApiService } from '../api/youtube-api/youtube-api.service';

import { switchMap, map, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as fromVideo from '../store/video';

@Injectable()
export class VideoEffects {
    constructor(
        private action$: Actions,
        private youtubeApiService: YoutubeApiService
    ) { }
    @Effect()
    loadVideosHome$ = this.action$.pipe(
        ofType<fromVideo.LoadVideosHome>(fromVideo.EVideoActions.LOAD_VIDEOS_HOMES),
        switchMap(action => {
            let pageToken = action.payload;
            return this.youtubeApiService.getVideosHome(pageToken).pipe(
                map(res => new fromVideo.LoadVideosHomeSuccess({ items: res.items, nextPageToken: res.nextPageToken })),
                catchError(e => of(new fromVideo.LoadVideosHomeSuccess({ items: [], nextPageToken: null })))
            )
        })
    )
    @Effect()
    loadVideosTrending$ = this.action$.pipe(
        ofType<fromVideo.LoadVideosTrending>(fromVideo.EVideoActions.LOAD_VIDEOS_TRENDING),
        switchMap(action => {
            let pageToken = action.payload;
            return this.youtubeApiService.getVideosTrending(pageToken).pipe(
                map(res => new fromVideo.LoadVideosTrendingSuccess({ items: res.items, nextPageToken: res.nextPageToken })),
                catchError(e => of(new fromVideo.LoadVideosTrendingSuccess({ items: [], nextPageToken: null })))
            )
        })
    )
    @Effect()
    searchVideos$ = this.action$.pipe(
        ofType<fromVideo.SearchVideos>(fromVideo.EVideoActions.SEARCH_VIDEOS),
        switchMap(action => {
            let pageToken = action.payload.nextPageToken;
            let query = action.payload.query;
            return this.youtubeApiService.searchVideos(query,pageToken).pipe(
                map(res => new fromVideo.SearchVideosSuccess({items:res.items,nextPageToken:res.nextPageToken})),
                catchError(e => of(new fromVideo.SearchVideosSuccess({items:[],nextPageToken:null})))
            )
        })
    )
    @Effect()
    loadMoreSearchVideos$ = this.action$.pipe(
        ofType<fromVideo.LoadMoreVideosSearch>(fromVideo.EVideoActions.LOAD_MORE_VIDEOS_SEARCH),
        switchMap(action => {
            let pageToken = action.payload.nextPageToken;
            let query = action.payload.query;
            return this.youtubeApiService.searchVideos(query,pageToken).pipe(
                map(res => new fromVideo.SearchVideosSuccess({items:res.items,nextPageToken:res.nextPageToken})),
                catchError(e => of(new fromVideo.SearchVideosSuccess({items:[],nextPageToken:null})))
            )
        })
    )
    @Effect()
    loadVideosRelated$ = this.action$.pipe(
        ofType<fromVideo.LoadVideosRelated>(fromVideo.EVideoActions.LOAD_VIDEOS_RELATED),
        switchMap(action => {
            let pageToken = action.payload.nextPageToken;
            let videoId = action.payload.videoId;
            return this.youtubeApiService.getVideosRelated(videoId,pageToken).pipe(
                map(res => new fromVideo.LoadVideosRelatedSuccess({items:res.items,nextPageToken:res.nextPageToken})),
                catchError(e => of(new fromVideo.LoadVideosRelatedSuccess({items:[],nextPageToken:null})))
            )
        })
    )

    @Effect()
    loadMoreVideosRelated$ = this.action$.pipe(
        ofType<fromVideo.LoadMoreVideosRelated>(fromVideo.EVideoActions.LOAD_MORE_VIDEOS_RELATED),
        switchMap(action => {
            let pageToken = action.payload.nextPageToken;
            let videoId = action.payload.videoId;
            return this.youtubeApiService.getVideosRelated(videoId,pageToken).pipe(
                map(res => new fromVideo.LoadVideosRelatedSuccess({items:res.items,nextPageToken:res.nextPageToken})),
                catchError(e => of(new fromVideo.LoadVideosRelatedSuccess({items:[],nextPageToken:null})))
            )
        })
    )
}