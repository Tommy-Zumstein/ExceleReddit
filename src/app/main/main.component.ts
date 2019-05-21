import { Component, OnInit } from '@angular/core';
import { map, pick } from 'lodash';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  data: Array<Object>;

  constructor(private frontPage: MainService) { }

  ngOnInit() {
    this.frontPage.homePage().subscribe(
      resultsFromReddit => {
        this.data = map(
          resultsFromReddit,
          result => {
            return pick(result.data, ['subreddit', 'author', 'title', 'subreddit_name_prefixed', 'thumbnail', 'preview', 'id', 'url', 'permalink']);
          });
      });
  }
}
