import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../../shared/services/api/api.service';
import config from '../../config';
import framework7 from '../../framework7';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _api: ApiService) {
    this.oauthUri = _api.Rc.authorizeUri(config.OAUTH_REDIRECT_URI);
  }

  @Output()
  oauthUri: string;

  ngOnInit() {
  }

  onLoginButtonClicked(event) {
    framework7.popup.open('#login-popup', true);
  }

}
