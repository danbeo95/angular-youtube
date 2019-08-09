import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const CHANNEL_ID = 'UCNYsYfpQyDCjNWybhAXgoqQ';
enum END_POINT {
  ACTIVITIES = 'activities',
  VIDEOS = 'videos',
  SEARCH = 'search'
}
@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  url: string = 'https://www.googleapis.com/youtube/v3/';
  defaultParams: any;
  constructor(
    private http: HttpClient
  ) {
    this.defaultParams = {
      key: environment.youtubeApiKey,
      maxResults: 20
    }
  }

  getVideosHome(pageToken?: string): Observable<{ items: [], nextPageToken: string }> {
    let url = this.url + END_POINT.ACTIVITIES;
    let params = this.buildParams({
      channelId: CHANNEL_ID,
      pageToken: pageToken,
      part: 'contentDetails,id,snippet'
    });
    return this.http.get<{ items: [], nextPageToken: string }>(url, { params: params });
  }

  getVideosTrending(pageToken?: string): Observable<{ items: [], nextPageToken: string }> {
    let url = this.url + END_POINT.VIDEOS;
    let params = this.buildParams({
      chart: 'mostPopular',
      part: 'contentDetails,id,snippet',
      pageToken: pageToken
    });
    return this.http.get<{ items: [], nextPageToken: string }>(url, { params: params });
  }

  getVideoDetail(videoId: string) {
    let url = this.url + END_POINT.VIDEOS;
    let params = this.buildParams({
      part: 'contentDetails,id,snippet',
      id: videoId
    });
    return this.http.get<{ items:any[], nextPageToken: string }>(url, { params: params });
  }
  getVideosRelated(videoId: string,pageToken:string) {
    let url = this.url + END_POINT.SEARCH;
    let params = this.buildParams({
      part: 'id,snippet',
      relatedToVideoId: videoId,
      type:'video',
      pageToken:pageToken
    });
    return this.http.get<{ items: any[], nextPageToken: string }>(url, { params: params });
  }

  searchVideos(query: string, pageToken?: string) {
    let url = this.url + END_POINT.SEARCH;
    let params = this.buildParams({
      q: query,
      type: 'video',
      part: 'snippet,id',
      pageToken: pageToken
    })
    return this.http.get<{ items: [], nextPageToken: string }>(url, { params: params });
  }

  private buildParams(paramsData): HttpParams {
    let httpParams = new HttpParams();
    paramsData = { ...paramsData, ...this.defaultParams };
    Object.keys(paramsData).map(key => {
      if (paramsData[key]) {
        httpParams = httpParams.append(key, paramsData[key]);
      }
    });
    return httpParams;
  }
}
