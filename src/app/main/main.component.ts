import { Component, OnInit } from '@angular/core';
import { map, pick } from 'lodash';
import { MainService } from './main.service';
import { UserStatus } from 'src/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  data: Array<Object>;
  user: UserStatus;

  constructor(private homePage: MainService) { }

  ngOnInit() {
    this.homePage.homePage().subscribe(
      resultsFromReddit => {
        this.data = map(
          resultsFromReddit,
          result => {
            return pick(result.data, ['subreddit', 'author', 'title', 'subreddit_name_prefixed', 'thumbnail', 'preview', 'id', 'url', 'permalink']);
          });
      });
  }
}
