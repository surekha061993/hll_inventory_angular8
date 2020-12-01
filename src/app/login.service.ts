import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Login } from './model/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient,private routr:Router) { }
  
  url='http://localhost:8082/login';  


  userLogin(username,password)
  {
    console.log(username);
    console.log(password);

    return this._http.get<Login>(this.url+'/'+username+'/'+password);
      
  }

  getLoginUser(userId){
    console.log(userId);
    return this._http.get<Login>(this.url+'/get'+'/'+userId);
    
}

  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('')
  }


}
