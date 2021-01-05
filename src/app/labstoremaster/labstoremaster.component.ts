import { Component, OnInit } from '@angular/core';
import { LabstoreserviceService } from '../labstoreservice.service';
import { LabStoreMaster } from '../model/labstoremaster';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../model/login.model';
/**
 * @author Surekha Londhe
 * @Date 28-12-2020
 */
@Component({
  selector: 'app-labstoremaster',
  templateUrl: './labstoremaster.component.html',
  styleUrls: ['./labstoremaster.component.css']
})

export class LabstoremasterComponent implements OnInit {

  constructor(private labService:LabstoreserviceService,private router:Router,private route : ActivatedRoute) { }

  labstore = new LabStoreMaster();
  login =new Login();

  showDiv :boolean=true;
  editDiv :boolean=false;
  
  labstoreShow:any;
  labstoreEdit:any={};
  
  ngOnInit() {
    let response=this.labService.getAllLab();
    response.subscribe((data)=>this.labstoreShow=data)
  }

  saveLabStore()
  {
     let response=this.labService.addLabStore(this.labstore);
     response.subscribe((data)=>this.labstoreShow=data);
     alert("Data Added Successfully");
  }

  public editLabStore(subinventory_Id:number)
  {
    this.showDiv=false;
    this.editDiv=true;
    let response=this.labService.editLabStore(subinventory_Id);
    response.subscribe(data =>{
    console.log(data);
    this.labstoreEdit=data});
  }
  
  updateLabStore(u){
    console.log(u);
    this.labService.updateLabStore(u).subscribe(rs=>{
      this.labstoreShow=rs;
      alert("Updated Successfully");
      window.location.reload();
    });
   }
  
  public deleteLabStore(subinventory_Id:number)
  {
    let response=this.labService.deleteLabStore(subinventory_Id);
     response.subscribe((data)=>this.labstoreShow=data);
     alert("Record Deleted Successfully");
     window.location.reload();
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }
}
