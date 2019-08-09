import { Action } from '@ngrx/store';

export enum ECollectionActions {
    LOAD_COLLECTION = '[COLLECTION] Load Collection',
    LOAD_COLLECTION_SUCCESS = '[COLLECTION] Load Collection Success',
    ADD_TO_COLLECTION = '[COLLECTION] Add To Collection',
    REMOVE_TO_COLLECTION = '[COLLECTION] Remove To Collection',
    CLEAR_ALL_COLLECTION = '[COLLECTION] Clear All Collection',
}

export class LoadCollection implements Action {
    public readonly type = ECollectionActions.LOAD_COLLECTION;
    constructor(){}
}
export class LoadCollectionSuccess implements Action {
    public readonly type = ECollectionActions.LOAD_COLLECTION_SUCCESS;
    constructor(public payload:any[]){}
}
export class AddToCollection implements Action {
    public readonly type = ECollectionActions.ADD_TO_COLLECTION;
    constructor(public payload:any){}
}
export class RemoveToCollection implements Action {
    public readonly type = ECollectionActions.REMOVE_TO_COLLECTION;
    constructor(public payload:any){}
}

export class ClearAllCollection implements Action {
    public readonly type = ECollectionActions.CLEAR_ALL_COLLECTION;
    constructor(){}
}

export type CollectionActions =
LoadCollection |
LoadCollectionSuccess |
AddToCollection |
RemoveToCollection |
ClearAllCollection
