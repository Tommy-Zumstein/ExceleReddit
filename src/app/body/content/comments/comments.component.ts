import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {
  @Input() comment: Object;
  expandComment: Boolean = false;
  constructor() {
  }

  ngOnInit() {
  }

}
