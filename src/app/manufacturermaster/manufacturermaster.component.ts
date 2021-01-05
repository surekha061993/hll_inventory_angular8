import { Component, OnInit } from '@angular/core';
import { ManufacturserviceService } from '../manufacturservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ManufacturerMaster } from '../model/ManufacturerMaster';
import { Login } from '../model/login.model';
/**
 * @author Surekha Londhe
 * @Date 22-12-2020
 */
@Component({
  selector: 'app-manufacturermaster',
  templateUrl: './manufacturermaster.component.html',
  styleUrls: ['./manufacturermaster.component.css']
})
export class ManufacturermasterComponent implements OnInit {


  constructor(private manufacturService:ManufacturserviceService,private router:Router,private route : ActivatedRoute) { }

  manufactur = new ManufacturerMaster();
  login =new Login();

  showDiv :boolean=true;
  editDiv :boolean=false;
  
  manuShow:any;
  manuEdit:any={};
  
  ngOnInit() {
    let response=this.manufacturService.getAllManufactur();
    response.subscribe((data)=>this.manuShow=data)
  }

  saveManufactur()
  {
     let response=this.manufacturService.addManufactur(this.manufactur);
     response.subscribe((data)=>this.manuShow=data);
     alert("Data Added Successfully");
  }

  public editManufactur(manufacturerId:number)
  {
    this.showDiv=false;
    this.editDiv=true;

    let response=this.manufacturService.editManufactur(manufacturerId);
    response.subscribe(data =>{
    console.log(data);
    this.manuEdit=data});
  }
  updateManufactur(u){
    console.log(u);
    this.manufacturService.updateManufactur(u).subscribe(rs=>{
      this.manuShow=rs;
      alert("Updated Successfully");
      window.location.reload();
    });
   }
  
  public deleteManufactur(manufacturerId:number)
  {
    let response=this.manufacturService.deleteManufacturer(manufacturerId);
     response.subscribe((data)=>this.manuShow=data);
     alert("Record Deleted Successfully");
     window.location.reload();
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }
}
