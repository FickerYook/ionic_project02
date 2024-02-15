import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
//import { User } from '../../model/users' //import from model/users
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private toastCtrl:ToastController,
              private afAuth: AngularFireAuth) {

  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data=>{
      if(data && data.email && data.uid){
        this.toastCtrl.create({
          message:`ยินดีต้อนรับการใช้งานแอพ,${data.email}`,
          duration: 3000,
          position: 'center' 
        }).present()
      }else{
        this.toastCtrl.create({
          message:'ไม่สามารถเข้าระบบได้ เนื่องจากข้อมูลไม่ถูกต้อง',
          duration: 3000
        }).present()
      }
    });
  }
//end
}
