import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode:boolean = false;
  users:any;

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  getUsers(){
    this.http.get('http://localhost:5000/api/users').subscribe( users => this.users = users)
  }

  cancelRegisterMode( event:boolean){
    this.registerMode = event;
  }

}
