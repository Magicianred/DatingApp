import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment.prod';

import { Members } from '../models/member';

const httpOptions = { 
  headers:new HttpHeaders({
  Authorizations:"Bearer" + JSON.parse(localStorage.getItem('user'))
})
}



@Injectable({
  providedIn: 'root'
})
export class MembersService {

  

  baseUrl = environment.apiUrl;
  constructor( private http:HttpClient) { }

  getMembers() {
    return this.http.get<Members[]>(this.baseUrl + "/users");
  }

  getMember( username:string ){
    return this.http.get<Members>(this.baseUrl + "/users/" + username);
  }

}
