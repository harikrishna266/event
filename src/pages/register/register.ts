import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninPage } from '../signin/signin'
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public error: any[] = [];

  public registerForm: FormGroup;
  constructor(public navCtrl: NavController,
    public toast: ToastController,
    public fb: FormBuilder,
    public navParams: NavParams) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register() {
    this.error = [];
    this.navCtrl.setRoot(SigninPage);
    this.showTost();
  }
  showTost() {
    let toast = this.toast.create({
      message: 'Registration successful, please login',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
