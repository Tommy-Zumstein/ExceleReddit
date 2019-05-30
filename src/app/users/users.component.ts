import { Component, OnInit } from '@angular/core';
import { createUser } from './../../api/users.api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  userName: string = 'test';
  email: string = 'test@test.com';
  friends: Array<Object> = [{}];
  blocked: Array<Object> = [{}];
  hidden: Array<Object> = [{}];
  mine: Array<Object> = [{}];
  multi: Array<Object> = [{}];


  constructor() { }

  ngOnInit() { }

  onSubmit() {
    const { userName, email, friends, blocked, hidden, mine, multi } = this;

    createUser({
      user: {
        userName,
        email,
      },
      friends,
      blocked,
      hidden,
      mine,
      multi,
    })
      .then(res => {
        console.log('User Created');
      })
      .catch(err => {
        console.log(err);
      })
  }

}
