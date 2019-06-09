import { Component, OnInit } from '@angular/core';
import { createUser } from './../../api/users.api';
import { LoginInfo } from '../../types';

// const md5 = require('md5');

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  userName: string;
  email: string;
  password: string;
  friends: Array<Object> = [];
  blocked: Array<Object> = [];
  hidden: Array<Object> = [];
  mine: Array<Object> = [];
  multi: Array<Object> = [];


  constructor() { }

  ngOnInit() { }

  onSubmit() {
    const { userName, email, password, friends, blocked, hidden, mine, multi } = this;

    createUser({
      user: { userName, email },
      password,
      friends,
      blocked,
      hidden,
      mine,
      multi,
    })
      .then(res => {
        console.log(res.data[0]);
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  setValue(login: LoginInfo) {
    if (login.userName) this.userName = login.userName;
    // else if (login.password) this.password = md5(login.password);
    else if (login.password) this.password = login.password;
    else this.email = login.email;
  }
}
