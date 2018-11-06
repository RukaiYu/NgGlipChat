import { Injectable } from '@angular/core';

import RingCentral from 'ringcentral-js-concise';
import Cookies from 'js-cookie';

import config from '../../../config';
import * as R from 'ramda';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _rc: RingCentral;
  private _inited: boolean;

  constructor(private _router: Router, private _routeSnapshot: ActivatedRoute) {
    this._rc = new RingCentral(
      config.RINGCENTRAL_CLIENT_ID,
      config.RINGCENTRAL_CLIENT_SECRET,
      config.RINGCENTRAL_SERVER_URI);

    this._rc.on('tokenChanged', async token => {
      if (R.isNil(token)) { // logout
        Cookies.remove('RINGCENTRAL_TOKEN');
        window.location.reload(false); // re-init all things
      } else {
        Cookies.set('RINGCENTRAL_TOKEN', token, { expires: 7 });
        setTimeout(() => {
          const path = this._routeSnapshot.snapshot.routeConfig && this._routeSnapshot.snapshot.routeConfig.path;
          if (path === 'login' || path === null) {
            _router.navigate(['index']);
          }
        }, 1000); // wait for vue-router to be ready
        if (!this._inited) {
          this._inited = true;
        }
        // if (R.isNil(pubnub.subscription())) {
        //   pubnub.subscribe()
        // }
      }
    });

    this._rc.token(Cookies.getJSON('RINGCENTRAL_TOKEN'));
  }

  get Rc(): RingCentral {
    return this._rc;
  }
}

