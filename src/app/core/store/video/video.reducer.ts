import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IVideoState, IVideosState } from './video.states';
import { VideoActions, EVideoActions } from './video.actions';

// Entity adapters
export const homeAdapter: EntityAdapter<any> = createEntityAdapter<any>({});
export const trendingAdapter: EntityAdapter<any> = createEntityAdapter<any>({});
export const searchAdapter: EntityAdapter<any> = createEntityAdapter<any>({
    selectId: (video) => video.id.videoId
});
export const relatedAdapter: EntityAdapter<any> = createEntityAdapter<any>({
    selectId: (video) => video.id.videoId
});

// Initial states
export const initialHomeState: IVideoState = homeAdapter.getInitialState({
    nextPageToken: null,
    loading: false
});
export const initialTrendingState: IVideoState = trendingAdapter.getInitialState({
    nextPageToken: null,
    loading: false
});
export const initialSearchState: IVideoState = searchAdapter.getInitialState({
    nextPageToken: null,
    loading: false
});
export const initialRelatedState: IVideoState = relatedAdapter.getInitialState({
    nextPageToken: null,
    loading: false
});
export const initialState: IVideosState = {
    home: initialHomeState,
    trending: initialTrendingState,
    search: initialSearchState,
    related: initialRelatedState
}
// Reducer funtion
export function videoReducer(state = initialState, action: VideoActions): IVideosState {
    // Videos home
    switch (action.type) {
        case EVideoActions.LOAD_VIDEOS_HOMES:
            return {
                ...state,
                home: {
                    ...state.home,
                    loading: true
                }
            }
        case EVideoActions.LOAD_VIDEO_HOME_SUCCESS:
            return {
                ...state,
                home: homeAdapter.addMany(action.payload.items, { ...state.home, loading: false, nextPageToken: action.payload.nextPageToken })
            }

        // Videos Trending
        case EVideoActions.LOAD_VIDEOS_TRENDING:
            return {
                ...state,
                trending: {
                    ...state.trending,
                    loading: true
                }
            };

        case EVideoActions.LOAD_VIDEO_TRENDING_SUCCESS:
            return {
                ...state,
                trending: homeAdapter.addMany(action.payload.items, { ...state.trending, loading: false, nextPageToken: action.payload.nextPageToken })
            }

        // Videos Search
        case EVideoActions.SEARCH_VIDEOS:
            return {
                ...state,
                search: searchAdapter.removeAll({ ...state.search, loading: true })
            };
        case EVideoActions.LOAD_MORE_VIDEOS_SEARCH:
            return {
                ...state,
                search: {
                    ...state.search,
                    loading: true
                }
            };
        case EVideoActions.SEARCH_VIDEOS_SUCCESS:
            return {
                ...state,
                search: searchAdapter.addMany(action.payload.items, { ...state.search, loading: false, nextPageToken: action.payload.nextPageToken })
            }

        // Videos Related
        case EVideoActions.LOAD_VIDEOS_RELATED:
            return {
                ...state,
                related: relatedAdapter.removeAll({ ...state.related, loading: true })
            };

        case EVideoActions.LOAD_MORE_VIDEOS_RELATED:
            return {
                ...state,
                related: {
                    ...state.related,
                    loading: true
                }
            };
        case EVideoActions.LOAD_VIDEOS_RELATED_SUCCESS:
            return {
                ...state,
                related: relatedAdapter.addMany(action.payload.items, { ...state.related, loading: false, nextPageToken: action.payload.nextPageToken })
            }
        default:
            return state;
    }
}