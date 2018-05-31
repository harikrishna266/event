import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories'
import { LoginProvider } from '../../providers/login';
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
    public loginSer: LoginProvider,
    public navParams: NavParams) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ionViewDidLoad() {

  }
  makelogin() {
    
    this.loginSer.getAccessToken(this.loginForm.value)
    .map(res => res.json())
    .subscribe((res: any) => {
      localStorage.setItem('access_token', res.access_token);
      this.navCtrl.setRoot(CategoriesPage);
      let toast = this.toast.create({
        message: 'You are logged in',
        duration: 3000,
        position: 'top'
      })
      toast.present();

    }, (e) => {
      let toast = this.toast.create({
        message: 'Please check your username and password!',
        duration: 3000,
        position: 'top'
      })
      toast.present();
    })
  }

}
