import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';
import { CreateEventPage} from '../create-event/create-event';

@NgModule({
  declarations: [
    MapPage,
  ],
  entryComponents: [
    CreateEventPage
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
  ],
})
export class MapPageModule {}
