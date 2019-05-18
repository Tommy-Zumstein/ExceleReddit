import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell-identifiers',
  templateUrl: './cell-identifiers.component.html',
  styleUrls: ['./cell-identifiers.component.sass']
})
export class CellIdentifiersComponent implements OnInit {
  @Input()
  identifiers: String | String[];

  constructor() {
  }

  ngOnInit() {
    this.identifiers = Array.from(this.identifiers);
  }
}