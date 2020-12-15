import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-formmaster',
  templateUrl: './formmaster.component.html',
  styleUrls: ['./formmaster.component.css']
})
export class FormmasterComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  login =new Login();
  ch:string;
  ngOnInit() {
    //this.ch=this.login.user_type;
    
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }

}
