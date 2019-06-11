import { Component, OnInit } from '@angular/core';
import { createUser } from './../../api/users.api';
import { LoginInfo } from '../../types';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  userName: string;
  email: string;
  password: string | Int32Array;
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
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  setValue(login: LoginInfo) {
    if (login.userName) this.userName = login.userName;
    else if (login.password) this.password = Md5.hashStr(<string>login.password);
    else this.email = login.email;
  }
}
