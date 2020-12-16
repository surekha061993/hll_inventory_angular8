import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormMaster } from './model/formmaster';

@Injectable({
  providedIn: 'root'
})
export class FormmasterserviceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8082/form";
  
  addForm(form)
  {
    console.log("In service :" +form);
    return this.http.post<number>(this.url+'/addForm',form);
  }
  
  public getAllForm()
  {
    return this.http.get("http://localhost:8082/form/getAllForm")
  }

  public deleteForm(formId)
  {
    return this.http.delete("http://localhost:8082/form/delete/"+formId)
  }

  public editForm(formId)
  {
    return this.http.get("http://localhost:8082/form/getForm/"+formId);
  }

  public updateForm(form)
  {
  console.log("In service :" +form);
   return this.http.put<FormMaster[]>("http://localhost:8082/form/update",form);
  }


}
