import { Component, OnInit } from '@angular/core';
import { TaxmasterserviceService } from '../taxmasterservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TaxMaster } from '../model/taxmaster';
import { Login } from '../model/login.model';
/**
 * @author Surekha Londhe
 * @Date 31-12-2020
 */
@Component({
  selector: 'app-taxmaster',
  templateUrl: './taxmaster.component.html',
  styleUrls: ['./taxmaster.component.css']
})
export class TaxmasterComponent implements OnInit {

  constructor(private taxService:TaxmasterserviceService,private router:Router,private route : ActivatedRoute) { }

  taxmaster = new TaxMaster();
  login =new Login();

  showDiv :boolean=true;
  editDiv :boolean=false;
  
  taxShow:any;
  taxEdit:any={};
  
  ngOnInit() {
    let response=this.taxService.getAllTax();
    response.subscribe((data)=>this.taxShow=data)
  }

  saveTax()
  {
     let response=this.taxService.addTax(this.taxmaster);
     response.subscribe((data)=>this.taxShow=data);
     alert("Data Added Successfully");
  }

  public editTax(tax_id:number)
  {
    this.showDiv=false;
    this.editDiv=true;

    let response=this.taxService.editTax(tax_id);
    response.subscribe(data =>{
    console.log(data);
    this.taxEdit=data});
  }
  updateTax(u){
    console.log(u);
    this.taxService.updateTaxx(u).subscribe(rs=>{
      this.taxShow=rs;
      alert("Updated Successfully");
      window.location.reload();
    });
   }
  
  public deleteTax(tax_id:number)
  {
    let response=this.taxService.deleteTax(tax_id);
     response.subscribe((data)=>this.taxShow=data);
     alert("Record Deleted Successfully");
     window.location.reload();
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }
}
