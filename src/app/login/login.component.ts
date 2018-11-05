import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../../shared/services/api/api.service';
import config from '../../config';
import framework7 from '../../framework7';
import URI from 'urijs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _api: ApiService,
    private _sanitizer: DomSanitizer,
    private router: Router) {
    this.oAuthUri =
      this._sanitizer.bypassSecurityTrustResourceUrl(
        _api.Rc.authorizeUri(config.OAUTH_REDIRECT_URI)
      );
  }

  @Output()
  oAuthUri: SafeResourceUrl;

  @Output()
  showModal: boolean;

  ngOnInit() {
    window.addEventListener('message', async ({ origin, data: { type, redirectUri } }) => {
      if (origin !== window.location.origin || type !== 'REDIRECT_URI') {
        return;
      }
      if (redirectUri.indexOf(config.OAUTH_REDIRECT_URI) === -1) {
        return; // unexpected uri
      }
      const params = URI(redirectUri.replace('#', '?')).search(true);
      if (params.code === undefined) { // unexpected data
        throw new Error(JSON.stringify(params));
      }
      await this._api.Rc.authorize({ code: params.code, redirectUri: config.OAUTH_REDIRECT_URI });
      this.closeModal();
      this.router.navigateByUrl('/');
    });
  }

  onLoginButtonClicked() {
    this.showModal = true;
    framework7.popup.open('#login-popup', true);
  }

  openModal() {
    this.showModal = true;
    framework7.popup.open('#login-popup', true);
  }

  closeModal() {
    this.showModal = false;
    framework7.popup.close('#login-popup', true);
  }

}
