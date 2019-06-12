import { Component, OnInit, Input } from '@angular/core';
import { findIndex } from 'lodash/findIndex';
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
  @Input() subreddit: Object;
  @Input() makeComment: Function;

  constructor() { }

  ngOnInit() {
  }

}

