import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CreateEventPage } from '../create-event/create-event';
import { EventDetailsPage } from '../event-details/event-details';

declare const L;


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  public map:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modal: ModalController,
    public actionSheetCtrl:ActionSheetController) {
  }

  ionViewDidLoad() {
    this.map = L.map('map');
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(this.map);
    this.map.on('locationfound',(e) => this.onLocationFound(this,e));
    this.map.on('locationerror', this.onLocationError);
    this.map.on('contextmenu', (e) => this.longPress(e)) ;
    this.map.locate({setView: true, maxZoom: 16});    
  }
  createEvent(e){
    let createEventpage = this.modal.create(CreateEventPage);
    createEventpage.present();
    createEventpage.onDidDismiss((r) => {
      L.marker(e.latlng).addTo(this.map).on('click',() => this.openDetails()).bindPopup(r).openPopup();
      L.circle(e.latlng, 1).addTo(this.map);
    })
  }
  longPress(e) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Do you want to create an event?',
      buttons: [
        {
          text: 'Yes',
          role: 'Yes',
          handler: () => {
            this.createEvent(e);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  openDetails() {
    let openDetails = this.modal.create(EventDetailsPage);
    openDetails.present();
    openDetails.onDidDismiss((r) => {
      
    })
  }
  onLocationFound(context,e) {
      let radius = e.accuracy / 2;
      L.marker(e.latlng).addTo(context.map).on('click',() => this.openDetails()).bindPopup('Annual football event ').openPopup();
      
      L.circle(e.latlng, radius).addTo(context.map);
      context.map.setView(e.latlng,19);
  }

  openEvent() {
    console.log("sd");
  }
  onLocationError(e) {
		alert(e.message);
	}

}
