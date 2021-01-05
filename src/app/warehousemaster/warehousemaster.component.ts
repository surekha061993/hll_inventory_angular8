import { Component, OnInit } from '@angular/core';
import { WarehouseserviceService } from '../warehouseservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WarehouseMaster } from '../model/warehousemaster';
import { Login } from '../model/login.model';
/**
 * @author Surekha Londhe
 * @Date 24-12-2020
 */
@Component({
  selector: 'app-warehousemaster',
  templateUrl: './warehousemaster.component.html',
  styleUrls: ['./warehousemaster.component.css']
})
export class WarehousemasterComponent implements OnInit {

  constructor(private warService:WarehouseserviceService,private router:Router,private route : ActivatedRoute) { }

  warehousemaster = new WarehouseMaster();
  login =new Login();

  showDiv :boolean=true;
  editDiv :boolean=false;
  
  warShow:any;
  warEdit:any={};
  
  ngOnInit() {
    let response=this.warService.getAllWarehouse();
    response.subscribe((data)=>this.warShow=data)
  }

  saveWarehouse()
  {
     let response=this.warService.addWarehouse(this.warehousemaster)
     response.subscribe((data)=>this.warShow=data);
     alert("Data Added Successfully");
  }

  public editWarehouse(warehouse_id:number)
  {
    this.showDiv=false;
    this.editDiv=true;
    let response=this.warService.editWarehouse(warehouse_id);
    response.subscribe(data =>{
    console.log(data);
    this.warEdit=data});
  }
  
  updateWarehouse(u){
    console.log(u);
    this.warService.updateWarehouse(u).subscribe(rs=>{
      this.warShow=rs;
      alert("Updated Successfully");
      window.location.reload();
    });
   }
  
  public deleteWarehouse(warehouse_id:number)
  {
    let response=this.warService.deleteWarehouse(warehouse_id);
     response.subscribe((data)=>this.warShow=data);
     alert("Record Deleted Successfully");
     window.location.reload();
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }
}