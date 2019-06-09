import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getComments } from '../../../../api/reddit_api';

@Injectable() export class CellRowService {
  getComments(id) {
    return Observable.create(
      observer => {
        getComments(id)
          .then(result => {
            observer.next({
              post: result.data[0].data.children[0].data, comments: result.data[1].data.children
            });
            observer.complete();
          })
          .catch(error => {
            console.log(error);
            observer.error();
          });
      }
    );
  }
}