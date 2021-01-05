import { Component, OnInit } from '@angular/core';
import { CategoryserviceService } from '../categoryservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryMaster } from '../model/categorymaster';
import { Login } from '../model/login.model';
/**
 * @author Surekha Londhe
 * @Date 18-12-2020
 */
@Component({
  selector: 'app-categorymaster',
  templateUrl: './categorymaster.component.html',
  styleUrls: ['./categorymaster.component.css']
})
export class CategorymasterComponent implements OnInit {
  
  constructor(private categoryService:CategoryserviceService,private router:Router,private route : ActivatedRoute) { }

  category = new CategoryMaster();
  login =new Login();

  showDiv :boolean=true;
  editDiv :boolean=false;
  
  catShow:any;
  catEdit:any={};
  
  ngOnInit() {
    let response=this.categoryService.getAllCategory();
    response.subscribe((data)=>this.catShow=data)
  }

  saveCategory()
  {
     let response=this.categoryService.addCategory(this.category);
     response.subscribe((data)=>this.catShow=data);
     alert("Data Added Successfully");
  }

  public editCategory(categoryId:number)
  {
    this.showDiv=false;
    this.editDiv=true;

    let response=this.categoryService.editCategory(categoryId);
    response.subscribe(data =>{
    console.log(data);
    this.catEdit=data});
  }
  updateCategory(u){
    console.log(u);
    this.categoryService.updateCategory(u).subscribe(rs=>{
      this.catShow=rs;
      alert("Updated Successfully");
      window.location.reload();
    });
   }
  
  public deleteCategory(categoryId:number)
  {
    let response=this.categoryService.deleteCategory(categoryId);
     response.subscribe((data)=>this.catShow=data);
     alert("Record Deleted Successfully");
     window.location.reload();
  }
  
  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }


}
