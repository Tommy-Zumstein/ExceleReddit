import { Component, OnInit, Input } from '@angular/core';
import { findIndex, forEach, pick, map } from 'lodash';
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

  // NOTE: this function has side effects for an object in another component
  // STUDY: addComments will fetch new comments from the API everytime the post
  //        gets unshown and then reshown, should we do that?
  //        this could gives us the ability to show new comments, but is less efficient
  addComments = (id: string) => {
    const index = findIndex(this.data, data => {
      return data.id === id;
    });

    if (index !== -1 && this.data[index]['comments'] && this.data[index]['showComments']) {
      this.data[index]['showComments'] = !this.data[index]['showComments'];
    } else {
      this.getComments(id);
    }
  }

  // NOTE: this function has side effects for an object in another component
  getComments(id: string) {
    this.service.getComments(id).subscribe(
      resultsFromReddit => {
        forEach(this.data, (data, index) => {
          if (data.id === id) {
            // NOTE: these are side effects modifying the data object
            this.data[index]['comments'] = map(resultsFromReddit.comments, result => {
              return pick(result.data, ['author', 'body', 'id', 'name', 'parent_id', 'permalink', 'replies', 'subreddit', 'subreddit_id']);
            });

            this.data[index]['showComments'] = true;
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
