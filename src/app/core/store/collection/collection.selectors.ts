import { IAppState } from '../index';
import { collectionAdapter } from './collection.reducer';
import { createSelector } from '@ngrx/store';

export const getCollection = (state:IAppState) => state.collection;

const {
selectAll:selectAllCollection,
selectIds:selectAllIds,
selectTotal:slectTotalCollection
} = collectionAdapter.getSelectors();

export const getAllCollections = createSelector(getCollection,selectAllCollection);
export const getCollectionIds = createSelector(getCollection,selectAllIds);
export const getCollectionTotal = createSelector(getCollection,slectTotalCollection);