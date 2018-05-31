import { environment } from '../../environments/environment';

export class CategoryModel {

    constructor(public id,public name,public description, public image, public selected=false){
        this.image =   `${environment.baseURL}images/${image}`;
    }
}