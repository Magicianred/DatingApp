import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";
import { NavigationExtras, Router } from "@angular/router";

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor( private toastr:ToastrService, private router:Router ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError( error => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                
                const modalStateErrors = [];
                for (const key in error.error.errors) {
                  if (error.error.errors) {    
                    modalStateErrors.push(error.error.errors[key])
                  }
                }
                throw modalStateErrors.flat();

              } else {
                this.toastr.error( (error.statusText === 'OK') ? "Bad Request" : error.statusText, error.status ); 
              }
              break;
            case 401:
              this.toastr.error( (error.statusText === 'OK') ? "Unauthorized" : error.statusText , error.status ); 
              break;
            case 404:
              this.router.navigateByUrl('/not-found');
              break;
            case 500:
              const navigationExtras:NavigationExtras = {state:{error:error.error}};
              this.router.navigateByUrl('/server-error', navigationExtras);
              break;
            default:
              this.toastr.error("Something unexpected went wrong");
              break;
          }
        }

        return throwError(error);
      } )
    );
  }
}
