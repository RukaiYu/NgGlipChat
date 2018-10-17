import { Component, OnInit, Input, Output } from '@angular/core';
import { Tab } from './tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Output()
  tabs: Tab[] = [
    { title: 'Chats', key: 'index', iconClass: 'mui-icon-chat', routerLink: '/index', },
    { title: 'Contacts', key: 'contacts', iconClass: 'mui-icon-personadd', routerLink: '/contacts', },
    { title: 'Me', key: 'me', iconClass: 'mui-icon-person-filled', routerLink: '/me', },
  ];

  constructor() { }

  @Input()
  active: string;

  ngOnInit() {
  }

}
