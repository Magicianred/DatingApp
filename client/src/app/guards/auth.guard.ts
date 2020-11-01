import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AccountService } from '../Services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor( private accountService:AccountService, private toastr:ToastrService){}
  
  canActivate():Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map( user => {
        if (user) return true;
        this.toastr.error("You shall not pass!!");
      } )
    )


  }
  
}
