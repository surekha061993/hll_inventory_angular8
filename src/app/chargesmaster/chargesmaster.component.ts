import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { ChargesserviceService } from '../chargesservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../model/login.model';
import { ChargesMaster } from '../model/chargesmaster';
/**
 * @author Surekha Londhe
 * @Date 30-12-2020
 */
@Component({
  selector: 'app-chargesmaster',
  templateUrl: './chargesmaster.component.html',
  styleUrls: ['./chargesmaster.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

  export class ChargesmasterComponent implements OnInit {

  constructor(private chargesService:ChargesserviceService,private router:Router,private route : ActivatedRoute) { }

  charges = new ChargesMaster();
  login =new Login();

  showDiv :boolean=true;
  editDiv :boolean=false;
  
  chargesShow:any;
  chargesEdit:any={};
  
  ngOnInit() {
    let response=this.chargesService.getAll();
    response.subscribe((data)=>this.chargesShow=data)
  }

  saveCharges()
  {
     let response=this.chargesService.addCharges(this.charges);
     response.subscribe((data)=>this.chargesShow=data);
     alert("Data Added Successfully");
  }

  public editCharges(inv_charges_Id:number)
  {
    this.showDiv=false;
    this.editDiv=true;

    let response=this.chargesService.editCharges(inv_charges_Id);
    response.subscribe(data =>{
    console.log(data);
    this.chargesEdit=data});
  }
  updateCharges(u){
    console.log(u);
    this.chargesService.updateCharges(u).subscribe(rs=>{
      this.chargesShow=rs;
      alert("Updated Successfully");
      window.location.reload();
    });
   }
  
  public deleteCharges(inv_charges_Id:number)
  {
    let response=this.chargesService.deleteCharges(inv_charges_Id);
     response.subscribe((data)=>this.chargesShow=data);
     alert("Record Deleted Successfully");
     window.location.reload();
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }
}
