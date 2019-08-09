export enum YouTubeResultKinds {
    Activities  = 'youtube#activity',
    Search = 'youtube#searchResult',
    Videos = 'youtube#video'
} 
export class AppUtils {
    static filterVideoId(video:any){
        switch (video.kind) {
            case YouTubeResultKinds.Activities:
                return video.contentDetails.upload.videoId;
            case YouTubeResultKinds.Search:
                return video.id.videoId;
            case YouTubeResultKinds.Videos:
                return video.id;
        }
    }
}