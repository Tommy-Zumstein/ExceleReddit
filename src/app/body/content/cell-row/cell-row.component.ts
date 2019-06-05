import { Component, OnInit, Input } from '@angular/core';
import { forEach, pick, map } from 'lodash';
import { CellRowService } from './cell-row.service';
import { findIndex } from 'lodash/findIndex';

@Component({
  selector: 'app-cell-row',
  templateUrl: './cell-row.component.html',
  styleUrls: ['./cell-row.component.sass']
})
export class CellRowComponent implements OnInit {
  @Input() data: Array<Object>;
  expandComment: boolean = false;
  counter: number = 0;

  constructor(private getComments: CellRowService) { }

  ngOnInit() {
  }

  addComments(id) {
    this.getComments.getComments(id).subscribe(
      resultsFromReddit => {
        forEach(this.data, (data, index) => {
          if (data.id === id) {

            this.data[index]['comments'] = map(resultsFromReddit.comments, result => {
              return pick(result.data, ['author', 'body', 'id', 'name', 'parent_id', 'permalink', 'replies', 'subreddit', 'subreddit_id']);
            });

          }
        });

        return this.data;

      });
  }

  counterInc() {
    return this.counter++;
  }

  expand() {
    this.expandComment = !this.expandComment;
  }

  // TODO: implement this function
  makeComment(id) {
    // ...
  }
}
