import { Injectable } from '@angular/core';
const COLLECTION_STORAGE = 'collection_storage';
@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() {

  }

  loadCollection():Array<any> {
    let collection = JSON.parse(localStorage.getItem(COLLECTION_STORAGE)) || [];
    return collection;
  }

  addToCollection(video: any) {
    let collection = this.loadCollection();
    collection.push(video);
    localStorage.setItem(COLLECTION_STORAGE, JSON.stringify(collection));
  }

  removeToCollection(videoId: string) {
    let collection = this.loadCollection();
    let indexRemove = collection.findIndex((video)=>{
      return video.id === videoId;
    });
    collection.splice(indexRemove,1);
    localStorage.setItem(COLLECTION_STORAGE, JSON.stringify(collection));
  }

  clearAllCollection() {
    localStorage.removeItem(COLLECTION_STORAGE);
  }

}
