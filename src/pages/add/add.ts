import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InputFormPage } from '../input-form/input-form';
// import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  params: Object;
  pushPage: any;
  
  blocks: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.pushPage = InputFormPage;
    this.params = { id: 139 };

    this.blocks=['B1','B2','B3','B4'];
  }

  
  ionViewDidLoad() {

  }

}
