import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../../../error.styles.scss']
})
export class RegistrationComponent implements OnInit {

  emailRegEx = new RegExp('[a-zA-Z0-9.-_]{6,}@[a-zA-Z]*\.[a-z]{2,}');

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  createUser(frm){
    this.auth.createUser(frm.value);
  }
}
