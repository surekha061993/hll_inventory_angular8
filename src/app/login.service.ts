import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Login } from './model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  
  url='http://localhost:8082';  


  getLoginCheck(username,password)
  {
    console.log(username);
    console.log(password);

    return this.http.get<Login>(this.url+'/login'+'/'+username+'/'+password);

  }


}
