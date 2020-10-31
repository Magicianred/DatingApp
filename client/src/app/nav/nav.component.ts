import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any={};
  

  constructor( public accountService:AccountService) { }

  ngOnInit(): void {
  
  }


  login(){
    this.accountService.login(this.model).subscribe(
      ( res ) => {
        console.log(res);
        
      }
    )
    console.log(this.model);
    
  }

  logout(){
    this.accountService.logout();
  
  }

  

}
