import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:LoginService,private router:Router,private route:ActivatedRoute) { }

  username:string;
  password:string;
  login=new Login();
  ngOnInit() {
  }

  getLogin(username,password)
  {
    console.log(username,password);

    this._auth.getLoginCheck(username,password).subscribe(rs=>{

    console.log(rs);
   
    if(rs==null){
       console.log("Enter valid data");
       alert("Pls Enter valid Credentials");
    }
    else{
      this.login=rs;
      switch (this.login.user_type) {
        case "admin":
               this.router.navigate(['/admin',this.login.userId]);
          break;
          
            // case "user":
            //   this.router.navigate(['/user',this.login.userId]);
            //   break;
      
        default:
          break;
      }
    }
  

    });
  }

}
