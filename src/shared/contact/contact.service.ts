import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _api: ApiService) { }

  getContacts(): Observable<Contact> {
    const requestUrl = `/restapi/v1.0/glip/persons/`;
    return this._api.Rc
      .get(requestUrl)
      .map((res: any) => JSON.parse(res['_body']))
      .catch(e => {
        return Observable.throw('The application has encountered an unknown error');
      });
  }
}
