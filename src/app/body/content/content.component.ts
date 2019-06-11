import { Component, OnInit, Input } from '@angular/core';
import { UserStatus } from 'src/types';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  @Input() user: UserStatus;
  @Input() data: Array<Object>;
  identifiers: String[] = [">", "A", "B", "C", "D", "E", "F", "G", "H", "I"];
  identifier: String = "A";

  constructor() {
  }

  ngOnInit() {
  }

}
