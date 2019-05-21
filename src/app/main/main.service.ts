import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getHomePage } from '../../reddit_api';

@Injectable() export class MainService {

    homePage() {
        return Observable.create(
            observer => {
                getHomePage()
                    .then(result => {
                        observer.next(result.data.data.children);
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