import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';


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
    public fb: FormBuilder,
    public navParams: NavParams) {
    this.createEventForm = this.fb.group({
      name: ['', Validators.required],
      details: ['', Validators.required],
      date: ['', Validators.required]      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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
