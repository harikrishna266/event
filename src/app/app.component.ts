import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { CategoriesPage } from '../pages/categories/categories'
import { MapPage } from '../pages/map/map'
import { SigninPage } from '../pages/signin/signin';
import { ApiService } from '../providers/api';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, apiSer:ApiService ) {
    console.log(apiSer.is_logedin());
    if(apiSer.is_logedin() === false) {
        this.rootPage = SigninPage;
    }else{
        this.rootPage = CategoriesPage;
    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


