import { Injectable } from "@angular/core";

import { CollectionService } from '../services/collection/collection.service';

import { of } from 'rxjs';
import { switchMap, map, catchError, startWith } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';

import * as fromCollection from '../store/collection';


@Injectable()
export class CollectionEffects {
    constructor(private actions$:Actions,private collectionService:CollectionService){}
    @Effect()
    loadCollection$ = this.actions$.pipe(
        ofType(fromCollection.ECollectionActions.LOAD_COLLECTION),
        startWith(fromCollection.ECollectionActions.LOAD_COLLECTION),
        switchMap(action=>{
            let collection = this.collectionService.loadCollection();
            return of(new fromCollection.LoadCollectionSuccess(collection));
        })
    )

    @Effect()
    addToCollection$ = this.actions$.pipe(
        ofType<fromCollection.AddToCollection>(fromCollection.ECollectionActions.ADD_TO_COLLECTION),
        switchMap(action=>{
            this.collectionService.addToCollection(action.payload);
            let collection = this.collectionService.loadCollection();
            return of(new fromCollection.LoadCollectionSuccess(collection));
        })
    )
    @Effect()
    removeToCollection$ = this.actions$.pipe(
        ofType<fromCollection.RemoveToCollection>(fromCollection.ECollectionActions.REMOVE_TO_COLLECTION),
        switchMap(action=>{
            this.collectionService.removeToCollection(action.payload);
            let collection = this.collectionService.loadCollection();
            return of(new fromCollection.LoadCollectionSuccess(collection));
        })
    )
    @Effect()
    clearAllCollection$ = this.actions$.pipe(
        ofType<fromCollection.ClearAllCollection>(fromCollection.ECollectionActions.CLEAR_ALL_COLLECTION),
        switchMap(action=>{
            this.collectionService.clearAllCollection();
            let collection = this.collectionService.loadCollection();
            return of(new fromCollection.LoadCollectionSuccess(collection));
        })
    )
}