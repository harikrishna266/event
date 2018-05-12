import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesPage } from './categories';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CategoriesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CategoriesPage),
  ],
})
export class CategoriesPageModule {}
