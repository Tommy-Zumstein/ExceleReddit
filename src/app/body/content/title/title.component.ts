import { Component, OnInit, Input } from '@angular/core';
import { RedditPost } from 'src/types';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit {
  @Input() addComments: Function;
  @Input() counterInc: Function;
  @Input() getComments: Function;
  @Input() lineNumber: Number;
  @Input() subreddit: RedditPost;
  @Input() makeComment: Function;

  constructor() { }

  ngOnInit() {
  }

}

