import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { News } from '../../model/news';
import { Subscription } from 'rxjs/Subscription';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  news: News[]; // เปลี่ยนชื่อตัวแปร new เป็น news
  sub: Subscription;
  errorMessage: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private newsProvider: NewsServiceProvider,
              private loadCtr: LoadingController
              ) {}

  ionViewWillEnter(){
    this.getNews();
  }

  ionViewWillLeave(){
    this.sub.unsubscribe();
  }

  getNews(){
    let loading = this.loadCtr.create({
          content: 'กรุณารอสักครู่',
          
        });
        
        loading.present();
        loading.dismiss();

       

    this.sub = this.newsProvider.getNews().subscribe(
      (res) => this.news = res,
      (error) => this.errorMessage = <any> error
    );
    

  }
}

// private loadCtr: LoadingController

// private getNews(){
//   let loading = this.loadCtr.create({
//     content: 'กรุณารอสักครู่',
//     spinner: 'dote'
//   });
//   loading.present();

//   this.sub = this.newsProvider.getNews().subscribe(
//     (res) => this.new = res,
//     (error) => {
//       this.errorMessage = <any> error
//     },
//     ()=>loading.dismiss();
//   );
  
// }
