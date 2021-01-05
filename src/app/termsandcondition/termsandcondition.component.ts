import { Component, OnInit } from '@angular/core';
import { TermscoditionserviceService } from '../termscoditionservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TermsAndCondition } from '../model/termscondition';
import { Login } from '../model/login.model';
/**
 * @author Surekha Londhe
 * @Date 04-01-2021
 */
@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.component.html',
  styleUrls: ['./termsandcondition.component.css']
})
export class TermsandconditionComponent implements OnInit {

  constructor(private termsService:TermscoditionserviceService,private router:Router,private route : ActivatedRoute) { }

  termsCondition = new TermsAndCondition();
  login =new Login();

  showDiv :boolean=true;
  editDiv :boolean=false;
  
  termsShow:any;
  termsEdit:any={};
  
  ngOnInit() {
    let response=this.termsService.getAll();
    response.subscribe((data)=>this.termsShow=data)
  }

  saveTerms()
  {
     let response=this.termsService.addTermsCondition(this.termsCondition);
     response.subscribe((data)=>this.termsShow=data);
     alert("Data Added Successfully");
     window.location.reload();
  }

  public editTerms(inv_termsandCondition_master_id:number)
  {
    this.showDiv=false;
    this.editDiv=true;

    let response=this.termsService.editTerms(inv_termsandCondition_master_id);
    response.subscribe(data =>{
    console.log(data);
    this.termsEdit=data});
    //alert("hi"+inv_termsandCondition_master_id);
  }
  updateTerms(u){
    console.log(u);
    this.termsService.updateTerms(u).subscribe(rs=>{
      this.termsShow=rs;
      alert("Updated Successfully");
      window.location.reload();
    });
   }
  
  public deleteTerms(inv_termsandCondition_master_id:number)
  {
    let response=this.termsService.deleteTerms(inv_termsandCondition_master_id);
     response.subscribe((data)=>this.termsShow=data);
     alert("Record Deleted Successfully");
     window.location.reload();
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }


}
