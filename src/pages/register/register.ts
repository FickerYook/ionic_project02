import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/users' //import from model/users
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private afAuth : AngularFireAuth
              ) {}

  async register(user: User){
    try{
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
        console.log(result);
        this.navCtrl.setRoot(LoginPage)
    }catch(e){
      console.log(e);
      const alert = this.alertCtrl.create({
        title: 'เกิดข้อผิดพลาด',
        subTitle:'ตรวจสอบระบบ/ฐานข้อมูล',
        buttons: ['ok']
      });
      alert.present();
    }
  }

  // end
}
