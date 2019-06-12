import { Component, OnInit, Input } from '@angular/core';
import { LoginInfo } from '../../types';
import { getLogin } from '../../api/users.api';
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


  // TODO: we can set the refreshToken of the user in the localStorage from the browser
  //       and check against that on login
  constructor() {
  }

  ngOnInit() {
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
          this.user = res.data as UserStatus;
        })
        .catch(err => {
          console.log(err.message);
        });
    } else {
      console.log('Please enter an email and password');
    }

  }
}
