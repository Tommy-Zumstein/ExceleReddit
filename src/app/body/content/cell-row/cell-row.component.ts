import { Component, OnInit, Input } from '@angular/core';
import { forEach, pick, map } from 'lodash';
import { CellRowService } from './cell-row.service';

@Component({
  selector: 'app-cell-row',
  templateUrl: './cell-row.component.html',
  styleUrls: ['./cell-row.component.sass']
})
export class CellRowComponent implements OnInit {
  @Input() data: Array<Object>;

  constructor(private getComments: CellRowService) { }

  ngOnInit() {
  }

  addComments(id) {
    this.getComments.getComments(id).subscribe(
      resultsFromReddit => {
        forEach(this.data, (data, index) => {
          if (data.id === id) {

            console.log(resultsFromReddit.comments)

            this.data[index]['comments'] = map(resultsFromReddit.comments, result => {
              return pick(result.data, ['author', 'body', 'id', 'name', 'parent_id', 'permalink', 'replies', 'subreddit', 'subreddit_id']);
            });
          }
        });
        return this.data;
      });
  }
}
