import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../shared/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private _contactService: ContactService) {
  }

  ngOnInit() {
    this._contactService.getContacts()
      .subscribe(contacts => {
        console.log(contacts);
      });
  }

}
