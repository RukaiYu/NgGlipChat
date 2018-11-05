import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.parent.postMessage({
      type: 'REDIRECT_URI',
      redirectUri: window.location.href
    }, window.location.origin);
  }

}
