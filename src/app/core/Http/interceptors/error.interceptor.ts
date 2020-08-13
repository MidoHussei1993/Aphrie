import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    
    constructor(
       private notifier: NotifierService
        ) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    

        return next.handle(req)
            .pipe(
                catchError(
                    err => {
                        if(err.status === 0) { // ConnectionError
                        this.notifier.notify('error', 'there is proplem in connection with server ');
                    } else if (err.status === 401) { // NotAuthorized errior
                        this.notifier.notify('error', 'You are not allowed to browse. Please try to log in');
                        
                        }
                        const error = {
                            status: err.status,
                            statusText: err.statusText,
                            message: err.error ? err.error.message: ''
                        }
                        return throwError(error);
                    }
                )
            )
    }
   
    

}