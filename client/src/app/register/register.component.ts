import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() usersFromHomeComponent:any;
  @Output() cancelRegister = new EventEmitter();
  model:any = {};

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }



  RegisterOn(){
    console.log(this.model);
    this.accountService.register(this.model).subscribe(
      response => {
        console.log(response);
        
      }, error => {
        console.log(error);
        
      }
    )
  }

  cancel(){
    this.cancelRegister.emit(false);
  }



}
