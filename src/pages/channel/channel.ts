import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { YtProvider } from '../../providers/yt/yt';
import { Observable } from 'rxjs/Observable';
import { PlaylistPage } from '../playlist/playlist';



@IonicPage()
@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html',
})
export class ChannelPage {

  channelId = 'UCwVQIkAtyZzQSA-OY1rsGig';  //UCZZPgUIorPAO48A1TbysdGG
  playlists : Observable<any[]>;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private ytService: YtProvider,
              private alertCtrl: AlertController
              ) {}

  searchPlaylists(){
    this.playlists = this.ytService.getPlaylistForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log('รายการวิดีโอ ',data)
    }, err=>{
      let alert = this.alertCtrl.create({
        title: 'ข้อผิดผลาด',
        message: 'ไม่พบรายการวิดีโอ',
        buttons: ['ตกลง']
      });
      alert.present();
    })
  }

  openPlaylist(id){
    // this.navCtrl.push('PlaylistPage', {id:id});
    this.navCtrl.push(PlaylistPage,{id:id})
  }

// end
}
