import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StudentServiceProvider } from '../providers/student-service/student-service';
import { StudentPage } from '../pages/student/student';
import { HttpClientModule } from '@angular/common/http';
import { NewsPage } from '../pages/news/news';
import { NewsServiceProvider } from '../providers/news-service/news-service';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { HttpModule } from '@angular/http'; 
// import { YoutubePage } from '../pages/youtube/youtube';
import { PlaylistPage } from '../pages/playlist/playlist';
import { ChannelPage } from '../pages/channel/channel';
import { YtProvider } from '../providers/yt/yt';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2'    // import AngularFireModel from install npm
import { AngularFireAuthModule } from 'angularfire2/auth'; // import  AngularFireAuthModule


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StudentPage,
    NewsPage,
    // YoutubePage,
    PlaylistPage,
    ChannelPage,
    AboutPage,
    LoginPage,
    RegisterPage,
  
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG), //import angular module
    AngularFireAuthModule    //import AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StudentPage,
    NewsPage,
    // YoutubePage,
    PlaylistPage,
    ChannelPage,
    AboutPage,
    LoginPage,
    RegisterPage,
  ],
  providers: [
    YoutubeVideoPlayer,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentServiceProvider,
    NewsServiceProvider,
    YtProvider
  ]
})
export class AppModule {}
