import { Component, OnInit, Input } from '@angular/core';
import { LoginInfo } from '../../types';
import { getLoginUsingToken, getLogin } from '../../api/users.api';
import { Md5 } from 'ts-md5/dist/md5';
import { UserStatus } from 'src/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @Input() user: UserStatus;
  login: LoginInfo;
  currentUserInfo: LoginInfo; // NOTE: this is only temporary to show user for presentation

  constructor() {
  }

  // TODO: we can set the refreshToken of the user in the localStorage from the browser
  //       and check against that on login
  ngOnInit() {
    const refreshToken = localStorage.getItem('refreshToken');

    if (refreshToken) {
      // send to API to send to firebase, 
      // NOTE: this call is not implemented server side
      getLoginUsingToken(refreshToken)
        .then(res => {
          localStorage.setItem('refreshToken', res.data.refreshToken);
          this.user = res.data as UserStatus;
        })
        .catch(err => {
          console.log(err.message);
        });
      // if firebase says ok, we can log user in
      // this.user = res.data as UserStatus;
    }
  }

  setLogin(login: LoginInfo) {
    if (login.password) {
      login.password = Md5.hashStr(<string>login.password);
    }
    this.login = { ...this.login, ...login };
  }

  loginSubmit() {
    // Send to firebase
    if (this.login.email && this.login.password) {
      getLogin(this.login)
        .then(res => {
          localStorage.setItem('refreshToken', res.data.refreshToken);
          this.user = res.data as UserStatus;
          this.currentUserInfo = res.data.user as LoginInfo; // NOTE: temporary
        })
        .catch(err => {
          console.log(err.message);
        });
    } else {
      console.log('Please enter an email and password');
    }

  }
}
