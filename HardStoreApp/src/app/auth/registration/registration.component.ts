import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  createUser(frm){
    this.auth.createUser(frm.value);
  }
}
