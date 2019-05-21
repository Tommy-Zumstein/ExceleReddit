import { Component, OnInit, Input } from '@angular/core';
import { replace } from 'lodash';

@Component({
  selector: 'app-cell-link',
  templateUrl: './cell-link.component.html',
  styleUrls: ['./cell-link.component.sass']
})
export class CellLinkComponent implements OnInit {
  @Input() link: String;
  @Input() text: String;
  @Input() fullUrl?: String;
  url: String;

  constructor() { }

  ngOnInit() {
    // if you want to insert text into a url use $$ to mark the spot to replace
    this.url = this.fullUrl ? replace(this.fullUrl, '$$', this.link) : this.link;
  }

}
