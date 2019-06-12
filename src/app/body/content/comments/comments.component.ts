import { Component, OnInit, Input } from '@angular/core';
import { RedditComment } from 'src/types';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {
  @Input() comment: RedditComment;
  @Input() counterInc: Number;
  expandComment: Boolean = false;
  constructor() {
  }

  ngOnInit() {
  }

}
