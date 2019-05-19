import { Component, OnInit } from '@angular/core';
import { me, getHomePage } from '../../../../reddit_api';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnInit {
  access_token: Object;
  me: Object;

  constructor() {
    getHomePage()
      .then(res => {
        this.access_token = res.data;
        console.log(this.access_token);
      })
    me()
      .then(res => this.me = res)
      .catch(err => console.log(err))
  }

  ngOnInit() {

  }

}
