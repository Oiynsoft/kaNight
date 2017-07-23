import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ShowPage } from '../show/show';
/**
 * Generated class for the InputFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-input-form',
  templateUrl: 'input-form.html',
})
export class InputFormPage {
  params: Object;
  pushPage: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    
    this.pushPage = InputFormPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputFormPage');
  }

  save() {
  let alert = this.alertCtrl.create({
    title: 'Запись сохранена',
    message: 'Запись успешно сохранена',
    buttons: [
      {
        text: 'Добавить еще',
        role: 'cancel',
        handler: () => {
          console.log('Добавить еще clicked');
        }
      },
      {
        text: 'Посмотреть список',
        handler: () => {
          //ion-button [navPush]="pushPage" [navParams]="params"
          console.log('Посмотреть список clicked');
        }
      }
    ]
  });
  alert.present();
}

}
