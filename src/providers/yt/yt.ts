// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class YtProvider {

  apiKey='AIzaSyDwJheqbhHrP8dE3WNlbOIgn6Kd6V3LQes'

  constructor(public http: Http) {
  }

  getPlaylistForChannel(channel){
    // return this.http.get('https://youtube.googleapis.com//youtube/v3/playlists?part=snippet, contentDetails&channelId=' + channel + '$maxResults=25&key='+ this.apiKey)
    // .map((res)=> {
    //   return res.json()['items'];
    // })

    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' +this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
    .map((res)=> {
      return res.json()['items'];
    })

  }

  getListVideos(listId){
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' +this.apiKey + '&playlistId=' + listId + '&part=snippet,id&maxResults=20')
    .map((res)=> { 
      return res.json()['items'];
    })
  }



//end  
}



//   let url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + 
//   this.channelID + '&q=' + this.searchQuery + '&type=video&order=date&maxResults=' + 
//   this.maxResults + '&key=' + this.googleToken;
  