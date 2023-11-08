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

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { HttpModule } from '@angular/http'; 
import { YoutubePage } from '../pages/youtube/youtube';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StudentPage,
    NewsPage,
    YoutubePage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StudentPage,
    NewsPage,
    YoutubePage
  ],
  providers: [
    YoutubeVideoPlayer,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentServiceProvider,
    NewsServiceProvider
  ]
})
export class AppModule {}
