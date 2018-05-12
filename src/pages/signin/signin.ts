import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories'
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  public loginForm: FormGroup;

  constructor(public navCtrl: NavController,
    public toast: ToastController,
    public fb: FormBuilder,
    public navParams: NavParams) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ionViewDidLoad() {

  }
  makelogin() {
    
        this.navCtrl.setRoot(CategoriesPage);
        let toast = this.toast.create({
          message: 'You are loged in',
          duration: 3000,
          position: 'top'
        })
        toast.present();
  }

}
