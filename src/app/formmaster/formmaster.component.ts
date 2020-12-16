import { Component, OnInit } from '@angular/core';
import { FormmasterserviceService } from '../formmasterservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormMaster } from '../model/formmaster';
import { Login } from '../model/login.model';
/**
 * @author Surekha Londhe
 * @Date 15-12-2020
 */

@Component({
  selector: 'app-formmaster',
  templateUrl: './formmaster.component.html',
  styleUrls: ['./formmaster.component.css']
})
export class FormmasterComponent implements OnInit {

  constructor(private formService:FormmasterserviceService,private router:Router,private route : ActivatedRoute) { }
  formMaster = new FormMaster();
  login =new Login();
  
  showDiv :boolean=true;
  editDiv :boolean=false;
  
  form:any;
  formEdit:any={};
  ngOnInit() {
    let response=this.formService.getAllForm();
    response.subscribe((data)=>this.form=data)
  }
  saveForm()
  {
     let response=this.formService.addForm(this.formMaster);
     response.subscribe((data)=>this.form=data);
  }

  public editForm(formId:number)
  {
    this.showDiv=false;
    this.editDiv=true;
    let response=this.formService.editForm(formId);
    response.subscribe(data =>{
    console.log(data);
    this.formEdit=data});
  }
  updateForm(u){
    console.log(u);
    this.formService.updateForm(u).subscribe(rs=>{
      this.form=rs;
    });
   }
  
  public deleteForm(formId:number)
  {
    let response=this.formService.deleteForm(formId);
    alert("Record Deleted Successfully");
    response.subscribe((data)=>this.form=data);
    this.router.navigate(['form']);
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }
}
