import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { environment } from '../environments/environment';

@Injectable()

export class EventProvider extends ApiService {

    constructor(public api: ApiService, public http: Http) {
        super();
    }
    getAllEventsByCategories() {
        let options = this.api.createAuthHeader();
        return this.http.get(`${environment.baseURL}api/get-user-event-by-category`, options).map(res => res.json());;
    }

}