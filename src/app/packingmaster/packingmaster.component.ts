import { Component, OnInit } from '@angular/core';
import { PackingmasterserviceService } from '../packingmasterservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PackingMaster } from '../model/packingmaster';
import { Login } from '../model/login.model';
/**
 * @author Surekha Londhe
 * @Date 16-12-2020
 */
@Component({
  selector: 'app-packingmaster',
  templateUrl: './packingmaster.component.html',
  styleUrls: ['./packingmaster.component.css']
})
export class PackingmasterComponent implements OnInit {

  constructor(private packingService:PackingmasterserviceService,private router:Router,private route : ActivatedRoute) { }

  packing = new PackingMaster();
  login =new Login();

  showDiv :boolean=true;
  editDiv :boolean=false;
  
  pack:any;
  packEdit:any={};
  
  ngOnInit() {
    let response=this.packingService.getAllPack();
    response.subscribe((data)=>this.pack=data)
  }

  savePacking()
  {
     let response=this.packingService.addPacking(this.packing);
     response.subscribe((data)=>this.pack=data);
     alert("Data Added Successfully");
  }

  public editPacking(packId:number)
  {
    this.showDiv=false;
    this.editDiv=true;

    let response=this.packingService.editPacking(packId);
    response.subscribe(data =>{
    console.log(data);
    this.packEdit=data});
  }
  updatePacking(u){
    console.log(u);
    this.packingService.updatePacking(u).subscribe(rs=>{
      this.pack=rs;
      alert("Updated Successfully");
      window.location.reload();
    });
   }
  
  public deletePacking(packId:number)
  {
    let response=this.packingService.deletePacking(packId);
     response.subscribe((data)=>this.pack=data);
     alert("Record Deleted Successfully");
     window.location.reload();
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }


}
