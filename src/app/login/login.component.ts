import { Component, OnInit, Input } from '@angular/core';
import { LoginInfo } from '../../types';
import { getLogin } from '../../api/users.api';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @Input() login: LoginInfo;

  constructor() { }

  ngOnInit() {
  }

  setLogin(login: LoginInfo) {
    if (login.userName) this.login.email = login.userName;
    else this.login.password = Md5.hashStr(<string>login.password);
  }

  loginSubmit() {
    // Send to firebase
    if (this.login.email && this.login.password) {
      getLogin(this.login)
        .then(res => {
          // Verify with database
          // Update components
          console.log('logged in');
        })
        .catch(err => {
          console.log(err.message);
        });
    } else {
      //send error 
    }

  }
}
