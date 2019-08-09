import { Action } from "@ngrx/store";
export enum EVideoActions {
    LOAD_VIDEOS_HOMES = "[VIDEO] Load Videos Home",
    LOAD_VIDEO_HOME_SUCCESS = "[VIDEO] Load Videos Home Success",
    LOAD_VIDEOS_TRENDING = "[VIDEO] Load Videos Trending",
    LOAD_VIDEO_TRENDING_SUCCESS = "[VIDEO] Load Videos Trending Success",
    SEARCH_VIDEOS = '[VIDEO] Search Videos',
    SEARCH_VIDEOS_SUCCESS = '[VIDEO] Search Videos Success',
    LOAD_MORE_VIDEOS_SEARCH = '[VIDEO] Search Videos Load More',
    LOAD_VIDEOS_RELATED = '[VIDEO] Load Related Videos',
    LOAD_VIDEOS_RELATED_SUCCESS = '[VIDEO] Load Related Videos Success',
    LOAD_MORE_VIDEOS_RELATED = '[VIDEO] Load More Videos Related'

}
// Videos Home Actions
export class LoadVideosHome implements Action {
    public readonly type = EVideoActions.LOAD_VIDEOS_HOMES;
    constructor(public payload?:string){}
}
export class LoadVideosHomeSuccess implements Action {
    public readonly type = EVideoActions.LOAD_VIDEO_HOME_SUCCESS;
    constructor(public payload:{items:[],nextPageToken:string}){}
}
// Videos Trending Actions
export class LoadVideosTrending implements Action {
    public readonly type = EVideoActions.LOAD_VIDEOS_TRENDING;
    constructor(public payload?:string){}
}
export class LoadVideosTrendingSuccess implements Action {
    public readonly type = EVideoActions.LOAD_VIDEO_TRENDING_SUCCESS;
    constructor(public payload:{items:[],nextPageToken:string}){}
}

// Videos Search Actions
export class SearchVideos implements Action {
    public readonly type = EVideoActions.SEARCH_VIDEOS;
    constructor(public payload:{query:string,nextPageToken:string}){}
}
export class SearchVideosSuccess implements Action {
    public readonly type = EVideoActions.SEARCH_VIDEOS_SUCCESS;
    constructor(public payload:{items:Array<any>,nextPageToken:string}){}
}
export class LoadMoreVideosSearch implements Action {
    public readonly type = EVideoActions.LOAD_MORE_VIDEOS_SEARCH;
    constructor(public payload:{query:string,nextPageToken:string}){}
}

// Videos Related Actions
export class LoadVideosRelated implements Action {
    public readonly type = EVideoActions.LOAD_VIDEOS_RELATED;
    constructor(public payload:{videoId:string,nextPageToken:string}){}
}
export class LoadVideosRelatedSuccess implements Action {
    public readonly type = EVideoActions.LOAD_VIDEOS_RELATED_SUCCESS;
    constructor(public payload:{items:Array<any>,nextPageToken:string}){}
}
export class LoadMoreVideosRelated implements Action {
    public readonly type = EVideoActions.LOAD_MORE_VIDEOS_RELATED;
    constructor(public payload:{videoId:string,nextPageToken:string}){}
}
export type VideoActions =
LoadVideosHome |
LoadVideosHomeSuccess |
LoadVideosTrending |
LoadVideosTrendingSuccess|
SearchVideos |
SearchVideosSuccess |
LoadMoreVideosSearch |
LoadVideosRelated |
LoadVideosRelatedSuccess |
LoadMoreVideosRelated

