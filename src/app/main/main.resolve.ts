import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MainService } from './main.service';

@Injectable()
export class MainResolve implements Resolve<any> {

    constructor(private mainService: MainService) { }

    resolve() {
        return this.mainService.homePage();
    }
}