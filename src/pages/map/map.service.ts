
import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapOptions,

    CameraPosition,
    MarkerOptions,
    HtmlInfoWindow,
    Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventDetailsPage } from '../event-details/event-details';

export class GooglemapService {
    public map: any;
    public markers: any[] = [];
    public nav: NavController;
    constructor() {
        // this.nav = nav;
    }
    getRandomInRange(from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    }
    createMaker(events) {
        for(let event of events.data) {
            let markerSetting = {
                title: 'event.name',
                animation: 'DROP',
                position: {
                    lat: 12.971599,
                    lng: 77.594563,
                }            
            }
            this.map.addMarker(markerSetting).then((marker) => {
                // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((e) => {
                //     this.createInfoWindow(marker);
                // });
            })
        }
    }
    getLocation() {
        let geolocation = new Geolocation();
        let options = {
            enableHighAccuracy: true,
            timeout: 25000
        };
        geolocation.getCurrentPosition(options).then((position) => {
            let location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };

        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    createInfoWindow(marker) {
        let htmlInfoWindow = new HtmlInfoWindow();
        let frame: HTMLElement = document.createElement('div');
        frame.innerHTML = [
            '<h3>Hearst Castle</h3> <button> view more</button>'

        ].join("");
        frame.getElementsByTagName("button")[0].addEventListener("click", (e) => this.seeEventDetails(e, this));
        htmlInfoWindow.setContent(frame, { width: "280px", height: "200px" });

        htmlInfoWindow.open(marker);
    }
    seeEventDetails(e, parent) {
        parent.nav.push(EventDetailsPage);
    }
    loadmap() {
        let mapOptions: GoogleMapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            },
            controls: {
                compass: true,
                myLocationButton: true,
                indoorPicker: true,
                zoom: true
            },
        };
        this.map = GoogleMaps.create('map_canvas', mapOptions);

    }
    mapLongPress() {
        return this.map.on(GoogleMapsEvent.MAP_LONG_CLICK)
    }
    loadMarkers() {
        // this.createMakerTestArray();
    }
}