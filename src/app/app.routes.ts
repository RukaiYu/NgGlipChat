import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProfileComponent } from './profile/profile.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [

    ]
  },
  {
    path: 'me',
    component: ProfileComponent,
  }
  // {
  //   path: 'search',
  //   component: SearchComponent
  // },


];
