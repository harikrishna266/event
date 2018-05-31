import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { CategoryProvider } from '../../providers/category';
import { CategoryModel } from './categorymodel';
import { LoadingController } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'page-categories',
    templateUrl: 'categories.html',
})
export class CategoriesPage {

    public categories:CategoryModel[] = [];

    constructor(public navCtrl: NavController,
        public catSer:CategoryProvider,
        public loader: LoadingController,
        public navParams: NavParams) {
    }

    ionViewWillEnter() {
        this.catSer.getAllCategories()
            .subscribe(res => {
                for(let cat of res.data ){
                    this.categories = [...this.categories, new CategoryModel(cat.id,cat.name,cat.description, cat.image)];
                }
            })

    }
    goToMaps() {
        let loader = this.loader.create({
            content: 'Updating your categories'
        });
        loader.present();

        let catarray = [];
        for(let cat of this.categories) {
            if(cat.selected == true) catarray.push(cat.id);
        }
        this.catSer.updateUserCategories(catarray)
        .subscribe(res => {
            loader.dismiss();
            this.navCtrl.setRoot(MapPage);
        })
        
    }
}
