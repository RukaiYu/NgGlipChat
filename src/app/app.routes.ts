import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { OauthComponent } from './login/oauth/oauth.component';
import { RouteguardService } from '../shared/services/base/RouteguardService.service';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
    canActivate: [RouteguardService]
  },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [

    ],
    canActivate: [RouteguardService]
  },
  {
    path: 'me',
    component: ProfileComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'oauth',
    component: OauthComponent
  },
  // {
  //   path: 'search',
  //   component: SearchComponent
  // },


];
