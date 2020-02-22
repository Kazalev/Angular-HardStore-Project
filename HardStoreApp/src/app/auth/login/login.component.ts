import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../error.styles.scss']
})
export class LoginComponent implements OnInit {

  emailRegEx = new RegExp('[a-zA-Z(0-9)*.-_]{6,}@[a-zA-Z]*\.[a-z]{2,}');

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password)
  }
}
