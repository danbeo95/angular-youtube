import { CollectionActions, ECollectionActions } from './collection.actions';
import { ICollectionState } from './collection.states';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
export const collectionAdapter: EntityAdapter<any> = createEntityAdapter({
})

// initial state
export const initalState: ICollectionState = collectionAdapter.getInitialState();
export function collectionReducer(state = initalState, action: CollectionActions): ICollectionState {

    switch (action.type) {
        case ECollectionActions.LOAD_COLLECTION_SUCCESS:
            return collectionAdapter.addMany(action.payload, state);

        case ECollectionActions.ADD_TO_COLLECTION:
            return collectionAdapter.addOne(action.payload, state);

        case ECollectionActions.REMOVE_TO_COLLECTION:
            return collectionAdapter.removeOne(action.payload, state);
        case ECollectionActions.CLEAR_ALL_COLLECTION:
            return initalState;
        default:
            return state;
    }
}