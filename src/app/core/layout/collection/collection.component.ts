import { Component, OnInit } from '@angular/core';

import * as fromCollection from '@store/collection';
import * as fromRoot from '@store/index';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collection$:Observable<Array<any>>;
  total$:Observable<number>;
  searchQuery:string;
  constructor(
    private store:Store<fromRoot.IAppState>
  ) { 
    this.collection$ = this.store.select(fromCollection.getAllCollections);
    this.total$ = this.store.select(fromCollection.getCollectionTotal);
  }

  ngOnInit() {

  }
  onRemove(videoId){
    this.store.dispatch(new fromCollection.RemoveToCollection(videoId))
  } 
  onClickClearAll(){
    this.store.dispatch(new fromCollection.ClearAllCollection());
  }
  onSearch(){
    this.collection$ = this.collection$.pipe(
      map(videos=>this.doFilter(videos))
    )
  }
  doFilter(videos:Array<any>):Array<any>{
    return videos.filter(video=>{
      let matchFilter = video.snippet.title.indexOf(this.searchQuery) > -1;
      return matchFilter;
    })
  }
}
