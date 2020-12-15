import { Component, OnInit, Input } from '@angular/core';
import { Login } from '../model/login.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  log:Login;
  login =new Login();
  @Input() userId:number;

 constructor(private route : ActivatedRoute,private loginservice:LoginService,private router:Router) { }
 
 statusOfUser:String=''; 

  ngOnInit(): void {

    this.statusOfUser = 'registered';
    console.log("hiiii");
    this.route.params.subscribe(params=>{this.userId=params['userId']})
          console.log("Data of params :"+this.userId);
         // console.log(this.username);
        this.loginservice.getLoginUser(this.userId).subscribe(rs=>{
          console.log("AdminDadta :"+rs);
         this.login=rs;
          console.log("data will print here");
          console.log(this.login);
        });
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }

  formMaster()
      {
        this.router.navigate(['form'],{relativeTo:this.route})
      }

  documentForm()
  {
    
    this.router.navigate(['document'],{relativeTo:this.route})
  }
}
