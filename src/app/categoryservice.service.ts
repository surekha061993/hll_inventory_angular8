import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryMaster } from './model/categorymaster';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  
  constructor(private http:HttpClient) { }
  url="http://localhost:8082/category";
  
  addCategory(category)
  {
    console.log("In service :" +category);
    return this.http.post<number>(this.url+'/addCategory',category);
  }
  
  public getAllCategory()
  {
    return this.http.get("http://localhost:8082/category/getAll");
  }

  public deleteCategory(categoryId)
  {
    return this.http.delete("http://localhost:8082/category/delete/"+categoryId);
  }

  public editCategory(categoryId)
  {
    return this.http.get("http://localhost:8082/category/getId/"+categoryId);
  }

  public updateCategory(category)
  {
  console.log("In service :" +category);
   return this.http.put<CategoryMaster[]>("http://localhost:8082/category/update",category);
  }


}
