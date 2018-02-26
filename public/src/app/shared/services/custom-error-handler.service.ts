import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomErrorHandlerService implements ErrorHandler {

    constructor() { }

    handleError(error) {
        console.log('#Error Occurred : ');
        console.log(error);
        return Observable.throw(error);
    }
}