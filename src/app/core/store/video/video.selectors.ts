import { IAppState } from '../index';
import { createSelector } from '@ngrx/store';
import { homeAdapter, trendingAdapter, searchAdapter, relatedAdapter } from './video.reducer';

export const getVideosState = (state: IAppState) => state.videos;

// Videos Home selectors
export const getHomeState = createSelector(getVideosState, (state) => state.home)
export const getLoadingHome = createSelector(getHomeState, (state) => state.loading);
export const {
    selectAll: selectAllVideosHome
} = homeAdapter.getSelectors();

export const getAllVideosHome = createSelector(getHomeState, selectAllVideosHome);
export const getNextPageTokenHome = createSelector(getHomeState, (state) => state.nextPageToken);


// Video Trending selectors

export const getTrendingState = createSelector(getVideosState, (state) => state.trending);
export const getLoadingTrending = createSelector(getTrendingState, (state) => state.loading);
export const {
    selectAll: selectAllVideosTrending
} = trendingAdapter.getSelectors();
export const getAllVideosTrending = createSelector(getTrendingState, selectAllVideosHome);
export const getNextPageTokenTrending = createSelector(getTrendingState, (state) => state.nextPageToken);

// Video Search selectors
export const getSearchState = createSelector(getVideosState, (state) => state.search);
export const getLoadingSearch = createSelector(getSearchState, (state) => state.loading);
export const getNextPageTokenSearch = createSelector(getSearchState, (state) => state.nextPageToken);

export const {
    selectAll: selectAllVideosSearch
} = searchAdapter.getSelectors();
export const getAllVideosSearch = createSelector(getSearchState, selectAllVideosSearch);


// Video search selectors
export const getRelatedState = createSelector(getVideosState, (state) => state.related);
export const getLoadingRelated = createSelector(getRelatedState, (state) => state.loading);
export const getNextPageTokenRelated = createSelector(getRelatedState, (state) => state.nextPageToken);

export const {
    selectAll: selectAllVideosRelated
} = relatedAdapter.getSelectors();
export const getAllVideosRelated = createSelector(getRelatedState, selectAllVideosRelated);

// Video now playing selectors

export const getNowPlaying = createSelector(getVideosState,(state)=>state.nowPlaying)