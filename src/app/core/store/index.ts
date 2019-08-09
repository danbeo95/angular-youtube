import { IVideoState, videoReducer, IVideosState } from './video';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { ICollectionState } from './collection/collection.states';
import { collectionReducer } from './collection/collection.reducer';


export interface IAppState {
    video:IVideosState,
    collection:ICollectionState
}

export const appReducers:ActionReducerMap<IAppState> = {
    video:videoReducer,
    collection:collectionReducer
}

@NgModule({
    imports:[
        StoreModule.forRoot(appReducers)
    ]
})
export class CoreStoreModule {}