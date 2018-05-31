import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { RegisterPageModule } from '../pages/register/register.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPageModule } from '../pages/signin/signin.module';
import { CategoriesPageModule } from '../pages/categories/categories.module'
import { ComponentsModule } from '../components/components.module';
import { MapPageModule } from '../pages/map/map.module';
import { CreateEventPageModule} from '../pages/create-event/create-event.module';
import { EventDetailsPageModule } from '../pages/event-details/event-details.module';
import { Geolocation } from '@ionic-native/geolocation';
import { GooglemapService } from '../pages/map/map.service';
import { Camera } from '@ionic-native/camera';
import { LoginProvider } from '../providers/login';
import { HttpModule } from '@angular/http';

import { ApiService } from '../providers/api';
import { CategoryProvider } from '../providers/category';
import { EventProvider } from '../providers/event';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    RegisterPageModule,
    SigninPageModule,
    ComponentsModule,
    CategoriesPageModule,
    CreateEventPageModule,
    EventDetailsPageModule,
    MapPageModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    Geolocation,
    ApiService,
    LoginProvider,
    CategoryProvider,
    EventProvider,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
