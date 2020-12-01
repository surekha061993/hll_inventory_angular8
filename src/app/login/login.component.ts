import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router,RouterLink, ActivatedRoute } from '@angular/router';
import { Login } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router,private route:ActivatedRoute) { }

 // username:string;
  //password:string;
  login=new Login();
  ch:string;

  ngOnInit() {
    console.log("I am in Login");
  }

  getLogin()
  {
    console.log(this.login.username,this.login.password);

    this.loginservice.userLogin(this.login.username,this.login.password).subscribe(rs=>{

   // console.log(rs);
   this.ch=this.login.user_type;

   console.log("User Type:"+this.login.user_type)

    if(rs==null){
       console.log("Enter valid data");
       alert("Pls Enter valid Credentials");
    }
    else{
      this.login=rs;
      this.ch = this.login.user_type;
      console.log("Retrived Login Type : "+this.login.user_type);

      switch (this.login.user_type) {
        case "admin":
               this.router.navigate(['/admin',this.login.userId]);
          break;
             case "user":
             this.router.navigate(['/user',this.login.userId]);
             break;
      
        default:
          break;
      }
    }
  });
}
}
