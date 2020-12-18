import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login.model';
import { FinancialyearserviceService } from '../financialyearservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FinancialYearMaster } from '../model/financialyearmaster';
/**
 * @author Surekha Londhe
 * @Date 14-12-2020
 */
@Component({
  selector: 'app-financialyear',
  templateUrl: './financialyear.component.html',
  styleUrls: ['./financialyear.component.css']
})
export class FinancialyearComponent implements OnInit {

  financialyear = new FinancialYearMaster();
  login =new Login();

  showDiv :boolean=true;
  editDiv :boolean=false;
  
  financialY:any;
  
   fyear:any={};
  constructor(private financialYearService:FinancialyearserviceService,private router:Router,private route : ActivatedRoute) { }

  ngOnInit() {
      let response=this.financialYearService.getAllFinancialYear();
      response.subscribe((data)=>this.financialY=data)
    }
  
  message:any;

  saveFinancialYear()
  {
     let response=this.financialYearService.addFinancialYear(this.financialyear);
     response.subscribe((data)=>this.financialY=data);
     
     alert("Added Successfully");
     window.location.reload();
  }

  public editFinancialYear(yearId:number)
  {
    this.showDiv=false;
    this.editDiv=true;

    let response=this.financialYearService.editFinancialYear(yearId);
    response.subscribe(data =>{
    console.log(data);
    this.fyear=data});
  }
  
  updateFinancialYear(u){
    console.log(u);
    this.financialYearService.updateFinancialYear(u).subscribe(rs=>{
      this.financialY=rs;
    });
   }
  
  public deleteFinancialYear(yearId:number)
  {
    let response=this.financialYearService.deleteFinancialYear(yearId);
    
    response.subscribe((data)=>this.financialY=data);
    alert("Record Deleted Successfully");
    this.router.navigate(['financial_year']);
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }
}
