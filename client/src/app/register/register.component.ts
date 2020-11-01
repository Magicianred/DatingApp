import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private accountService:AccountService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }



  RegisterOn(){
    console.log(this.model);
    this.accountService.register(this.model).subscribe(
      response => {
        console.log(response);
        
      }, error => {
        this.toastr.error(error.error);
      }
    )
  }

  cancel(){
    this.cancelRegister.emit(false);
  }



}
