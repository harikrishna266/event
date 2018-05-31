import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {

  public error: any[] = [];

  public createEventForm: FormGroup;
  constructor(public navCtrl: NavController,
    public toast: ToastController,
    public viewCnt: ViewController,
    public camera:Camera,
    public fb: FormBuilder,
    public navParams: NavParams) {
    this.createEventForm = this.fb.group({
      name: ['', Validators.required],
      details: ['', Validators.required],
      date: ['', Validators.required],
      image: ['', Validators.required],    
    });
  }

  ionViewDidLoad() {
    console.log()
  }
  
  getImage() {
  

    this.camera.getPicture({
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: this.camera.DestinationType.DATA_URL
       }).then((imageData) => {
           this.createEventForm.value.image = 'data:image/jpeg;base64,'+imageData;
            this.navCtrl.pop(this.createEventForm.value);
        }, (err) => {
         
       });
  }
  showTost() {
    let toast = this.toast.create({
      message: 'Event created',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  createEvent() {
    this.viewCnt.dismiss(this.createEventForm.value.name);
  }
  cancelEvent() {
    this.viewCnt.dismiss(false);
  }

}
