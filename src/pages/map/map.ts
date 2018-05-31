import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CreateEventPage } from '../create-event/create-event';
import { EventDetailsPage } from '../event-details/event-details';
import { Geolocation } from '@ionic-native/geolocation';
import { GooglemapService } from './map.service';
import { EventProvider } from '../../providers/event';

declare const L;


@IonicPage()
@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
})
export class MapPage {
    public GMap:GooglemapService ;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public modal: ModalController,
        public geolocation: Geolocation,
        public events:EventProvider,
        public actionSheetCtrl: ActionSheetController) { }

    ionViewDidLoad() {
        
        // this.mapLongPress();
        this.events.getAllEventsByCategories()
            .subscribe(res => {
                this.GMap = new GooglemapService();
                this.GMap.loadmap();
                this.GMap.createMaker(res);
            });
        // this.GMap.getLocation();
    }
    mapLongPress() {
        this.GMap.mapLongPress().subscribe(res => {
            this.presentActionSheet(res);
        })
    }


     
    presentActionSheet(e) {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Do you wish to create an event ?',
            buttons: [
                { text: 'No',handler: () => {}}, 
                {text: 'Yes',handler: () => { this.createEvent(e);}}
            ]
        });
        actionSheet.present();
    }

    createEvent(e) {
        this.navCtrl.push(CreateEventPage,e);
    }

}
