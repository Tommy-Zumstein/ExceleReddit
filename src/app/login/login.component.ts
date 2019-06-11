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
  email: string;
  password: string | Int32Array;

  constructor() {
  }

  ngOnInit() {
  }

  setLogin(login: LoginInfo) {
    if (login.email) this.email = login.email;
    else this.password = Md5.hashStr(<string>login.password);
  }

  loginSubmit() {
    // Send to firebase
    if (this.email && this.password) {
      getLogin({ email: this.email, password: this.password } as LoginInfo)
        .then(res => {
          this.user = res.data as UserStatus;
          console.log(res);
        })
        .catch(err => {
          console.log(err.message);
        });
    } else {
      //send error 
      console.log('Please enter an email and password');
    }

  }
}
