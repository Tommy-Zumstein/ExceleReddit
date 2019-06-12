import { Component, OnInit, Input } from '@angular/core';
import { RedditPost } from 'src/types';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {
  @Input() data: RedditPost;

  constructor() {
  }

  ngOnInit() {
  }

}
