import { Component, OnInit, Input } from '@angular/core';
import { LoginInfo } from '../../types';
import { getLogin } from '../../api/users.api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @Input() login: LoginInfo = { userName: '', email: '', password: '' };

  constructor() { }

  ngOnInit() {
  }

  setLogin(login: LoginInfo) {
    if (login.userName) this.login.userName = login.userName;
    else this.login.password = login.password;
  }

  loginSubmit() {
    // Send to firebase
    if (this.login.userName && this.login.password) {
      getLogin(this.login)
        .then(res => {
          // Verify with database
          // Update components

        })
        .catch(err => {

        });
    } else {
      //send error 
    }

  }
}
