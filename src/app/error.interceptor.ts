import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';





@Injectable()

export class errorInterceptor implements HttpInterceptor{

  constructor( /*private apiService: ApiService*/){}

  intercept( req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{


    return next.handle(req).pipe(
        catchError((err: any) => {
          if (err instanceof HttpErrorResponse) {
            // Handle HTTP errors
            if (err.status === 401) {
              // Specific handling for unauthorized errors         
              console.error('Unauthorized request:', err);
              // You might trigger a re-authentication flow or redirect the user here
            } else {
              // Handle other HTTP error codes
              console.error('HTTP error:', err);
            }
          } else {
            // Handle non-HTTP errors
            console.log('An error occurred:', err);
          }
    
          // Re-throw the error to propagate it further
          return throwError(() => err); 
        })
      );
  //const localToken = this.apiService.getUserToken()
  //req = req.clone( {setHeaders:{ Authorization: 'Bearer ' + localToken}} )
  //return next.handle(req);
  
  }
  }