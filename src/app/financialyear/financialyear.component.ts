import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login.model';
import { InventoryFinancialYear } from '../model/InventoryFinancialYear';
import { FinancialyearserviceService } from '../financialyearservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-financialyear',
  templateUrl: './financialyear.component.html',
  styleUrls: ['./financialyear.component.css']
})
export class FinancialyearComponent implements OnInit {

  financialyear = new InventoryFinancialYear();
  login =new Login();
  //doc1:InventoryFinancialYear[];

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
  }

  public editFinancialYear(finYearId:number)
  {
    this.showDiv=false;
    this.editDiv=true;

    let response=this.financialYearService.editFinancialYear(finYearId);
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
  
  public deleteFinancialYear(finYearId:number)
  {
    let response=this.financialYearService.deleteFinancialYear(finYearId);
    response.subscribe((data)=>this.financialY=data);
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

}
