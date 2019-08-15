import { EntityState} from '@ngrx/entity';

export interface IVideoState extends EntityState<any> {
    nextPageToken:string;
    loading:boolean;
}
export interface IVideosState {
    home:IVideoState,
    trending:IVideoState,
    search:IVideoState,
    related:IVideoState,
    nowPlaying:any
}