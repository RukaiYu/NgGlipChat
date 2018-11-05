import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../api/api.service';
import * as R from 'ramda';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {
  constructor(
    private router: Router,
    private _api: ApiService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const rc = this._api.Rc;
    const path = route.routeConfig.path;
    if (path !== 'login' && R.isNil(rc.token())) {
      this.router.navigate(['login']);
      return false;
    }

    // for users, the only unavailable page is the login page
    if (path === 'login' && !R.isNil(rc.token())) {
      this.router.navigate(['root']);
    }
    return true;
  }

}
