import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  @Input() data: Array<Object>;
  identifiers: String[] = [">", "A", "B", "C", "D", "E", "F", "G", "H", "I"];
  identifier: String = "A";

  constructor() {
  }

  ngOnInit() {
  }

}
