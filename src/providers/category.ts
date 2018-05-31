import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { environment } from '../environments/environment';

@Injectable()

export class CategoryProvider extends ApiService {

    constructor(public api: ApiService, public http: Http) {
        super();
    }
    getAllCategories() {
        let options = this.api.createAuthHeader();
        return this.http.get(`${environment.baseURL}api/categories`, options).map(res => res.json());;
    }

    updateUserCategories(cat) {
        let options = this.api.createAuthHeader();
        return this.http.post(`${environment.baseURL}api/update-user-categories`,cat, options).map(res => res.json());;
    }

}