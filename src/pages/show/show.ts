import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController} from 'ionic-angular';
import {RemoteServiceProvider} from '../../providers/remote-service/remote-service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {
  noteList = []

  constructor(public navCtrl: NavController, private remoteService:RemoteServiceProvider, public http: Http) {
   this.getNotes();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
  }
  getNotes(){
    this.remoteService.getNotes().subscribe((data)=>{
      this.noteList = data;
    });
  }

}
