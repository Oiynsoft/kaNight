import { Component } from '@angular/core';
//  ViewChild 
// import { Content } from 'ionic-angular';
// import { NavController, NavParams } from 'ionic-angular';

import { ShowPage } from '../show/show';
import { ScanPage } from '../scan/scan';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

//  @ViewChild(Content) content: Content;

  tab1Root: any = ScanPage;
  tab2Root: any = AddPage;
  tab3Root: any = ShowPage;

  titleMenu: string;
  
  ChangeTitle(num: number){
    if(num==1) this.titleMenu = "Сканер QR-кода";
    if(num==2) this.titleMenu = "Ввод данных";
    if(num==3) this.titleMenu = "Все данные";
  }

  constructor( ) {

  }

}