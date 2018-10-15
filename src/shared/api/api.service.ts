import { Injectable } from '@angular/core';

import RingCentral from 'ringcentral-js-concise';

import config from '../../config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _rc: RingCentral;

  constructor() {
    this._rc = new RingCentral(
      config.RINGCENTRAL_CLIENT_ID,
      config.RINGCENTRAL_CLIENT_SECRET,
      config.RINGCENTRAL_SERVER_URI);
  }

  get Rc(): RingCentral {
    return this._rc;
  }
}

