import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { User } from '../../model/users' //import from model/users
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              public alertCtrl: AlertController
              ) {}

  async login(user:User){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
      if(!result){
        const alert = this.alertCtrl.create({
          title: 'เกิดข้อผิดพลาด',
          subTitle:'ไม่สามารถเข้าสู่ระบบได้',
          buttons: ['ตกลง']
        });
        alert.present();
      
      }else{
        this.navCtrl.setRoot(HomePage)
      }
    }catch(err){
      const alert = this.alertCtrl.create({
        title: 'เกิดข้อผิดพลาด',
        subTitle:'ไม่สามารถเข้าสู่ระบบได้',
        buttons: ['ตกลง']
      });
      alert.present();
    };
    
  };
  // --------------

  register(){
    this.navCtrl.push(RegisterPage)
  }


  // end
}
