
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
//дальше идут табы
import { TabsPage } from '../pages/tabs/tabs';
import { ScanPage } from '../pages/scan/scan';
import { ShowPage } from '../pages/show/show';
import { AddPage } from '../pages/add/add';
import { InputFormPage } from './../pages/input-form/input-form';
import { ChangePassPage } from './../pages/change-pass/change-pass';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    ScanPage,
    ShowPage,
    AddPage,
    InputFormPage,
    ChangePassPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      tabsPlacement:'top', tabsHighlight: true, 
      platforms:{ 
        ios:{ 
          tabsPlacement:'bottom',
          tabsHighlight: false 
    }}}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    ScanPage,
    ShowPage,
    AddPage,
    InputFormPage,
    ChangePassPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider
  ]
})
export class AppModule {}
