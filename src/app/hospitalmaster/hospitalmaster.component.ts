import { Component, OnInit } from '@angular/core';
import { HospitalserviceService } from '../hospitalservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HospitalMaster } from '../model/hospitalmaster';
import { Login } from '../model/login.model';
/**
 * @author Surekha Londhe
 * @Date 29-12-2020
 */
@Component({
  selector: 'app-hospitalmaster',
  templateUrl: './hospitalmaster.component.html',
  styleUrls: ['./hospitalmaster.component.css']
})
export class HospitalmasterComponent implements OnInit {

  constructor(private hospitalService:HospitalserviceService,private router:Router,private route : ActivatedRoute) { }

  hospital = new HospitalMaster();
  login =new Login();

  showDiv :boolean=true;
  editDiv :boolean=false;
  
  hospitalShow:any;
  hospitalEdit:any={};
  
  ngOnInit() {
    let response=this.hospitalService.getAll();
    response.subscribe((data)=>this.hospitalShow=data)
  }

  saveHospital()
  {
     let response=this.hospitalService.addHospital(this.hospital);
     response.subscribe((data)=>this.hospitalShow=data);
     alert("Data Added Successfully");
  }

  public editHospital(idinv_hospital_details:number)
  {
    this.showDiv=false;
    this.editDiv=true;

    let response=this.hospitalService.editHospital(idinv_hospital_details);
    response.subscribe(data =>{
    console.log(data);
    this.hospitalEdit=data});
  }
  updateHospital(u){
    console.log(u);
    this.hospitalService.updateHospital(u).subscribe(rs=>{
      this.hospitalShow=rs;
      alert("Updated Successfully");
      window.location.reload();
    });
   }
  
  public deleteHospital(idinv_hospital_details:number)
  {
    let response=this.hospitalService.deleteHospital(idinv_hospital_details);
     response.subscribe((data)=>this.hospitalShow=data);
     alert("Record Deleted Successfully");
     window.location.reload();
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }
}
