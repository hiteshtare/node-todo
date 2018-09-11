import { ErrorHandler, Injectable, Injector, Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorsService } from '../errors-service/errors.service';
import { CustomToastService } from '../../services/custom-toast.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

    constructor(public injector: Injector) {
    }

    handleError(error: Error | HttpErrorResponse) {
        const customToastService = this.injector.get(CustomToastService);

        const errorsService = this.injector.get(ErrorsService);
        const router = this.injector.get(Router);

        if (error instanceof HttpErrorResponse) {
            // Server error happened
            if (!navigator.onLine) {
                // No Internet connection
                return customToastService.toastMessage('No Internet Connection', '');
            }
            // Http Error
            // Send the error to the server
            errorsService.log(error).subscribe();

            // Show notification to the user

            return customToastService.toastMessage(`HttpError Occured : ${error.status} - ${error.message}`, '');
        } else
            if (error instanceof TypeError) {
                //  TypeError
                // Create custom Error Object and log the error
                const errObj = {
                    message: error.message,
                    stack: error.stack
                };
                errorsService
                    .log(errObj)
                    .subscribe(errorWithContextInfo => {
                        router.navigate(['error'], { queryParams: errorWithContextInfo });
                    });
            } else {
                // Client Error Happend
                // Send the error to the server and then
                // redirect the user to the page with all the info
                const errObj = {
                    message: error.message,
                    stack: error.stack
                };

                errorsService
                    .log(errObj)
                    .subscribe(errorWithContextInfo => {
                        router.navigate(['error'], { queryParams: errorWithContextInfo });
                    });
            }
    }
}
