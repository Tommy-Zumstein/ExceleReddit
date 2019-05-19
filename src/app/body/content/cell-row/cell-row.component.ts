import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell-row',
  templateUrl: './cell-row.component.html',
  styleUrls: ['./cell-row.component.sass']
})
export class CellRowComponent implements OnInit {
  @Input() data: Array<Object>;

  constructor() {
  }

  ngOnInit() {
  }

}
