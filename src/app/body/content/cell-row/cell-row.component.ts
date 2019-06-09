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
  counter: number = 0;
  expandComment: boolean = false;

  constructor(private service: CellRowService) { }

  ngOnInit() { }

  addComments = (id) => {
    this.service.getComments(id).subscribe(
      resultsFromReddit => {
        forEach(this.data, (data, index) => {
          if (data.id === id) {

            // NOTE: this is a side effect modifying the data object
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
