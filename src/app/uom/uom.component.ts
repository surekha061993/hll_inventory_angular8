import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login.model';
import { Uom } from '../model/uom.model';
import { UomserviceService } from '../uomservice.service';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * @author Vinit Vaidya
 * @Date 17-12-2020
 */

@Component({
  selector: 'app-uom',
  templateUrl: './uom.component.html',
  styleUrls: ['./uom.component.css']
})
export class UomComponent implements OnInit {

  uom = new Uom();
  login = new Login();
  
  showDiv :boolean=true;
  editDiv :boolean=false;
  
  uoms:any;
  uomname:string;

  uomEdit:any={};
  constructor(private uomService:UomserviceService,private router:Router,private route : ActivatedRoute) { }

  ngOnInit() {
    let response=this.uomService.gelAllUom();
    response.subscribe((data)=>this.uoms=data)
  }
  message:any;

  saveUom()
  {
    console.log('hhhhhhhh');
     let response=this.uomService.addUom(this.uom);
     response.subscribe((data)=>this.message=data);
    
  }

  public editUom(uomid:number)
  {
    this.showDiv=false;
    this.editDiv=true;

    let response=this.uomService.editUom(uomid);
    response.subscribe(data =>{
    console.log(data);
    this.uomEdit=data});
  }

  updateUom(u){
    console.log(u);
    this.uomService.updateUom(u).subscribe(rs=>{
      this.uoms=rs;
    });
   }

   public deleteUom(uomid:number)
  {
    let response=this.uomService.deleteUom(uomid);
    response.subscribe((data)=>this.uoms=data);
  }

  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }

}
