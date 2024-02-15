import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { StudentPage } from '../pages/student/student';
import { NewsPage } from '../pages/news/news';
// import { YoutubePage } from '../pages/youtube/youtube';
import { ChannelPage } from '../pages/channel/channel';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = HomePage;
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'หน้าแรก', component: HomePage },
      { title: 'ช้อมูลนักศึกษา', component: StudentPage },
      { title: 'ข่าวสาร', component: NewsPage },
      // { title: 'Youtube', component: YoutubePage },  
      { title: 'ช่องยูทูป', component: ChannelPage },
      { title: 'ผู้พัฒนา', component: AboutPage },

  
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
