import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
   declarations: [
      AppComponent,
      IndexComponent,
      ContactsComponent,
      ProfileComponent,
      ChatComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(rootRouterConfig)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
