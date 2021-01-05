import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LabStoreMaster } from './model/labstoremaster';

@Injectable({
  providedIn: 'root'
})
export class LabstoreserviceService {
  constructor(private http:HttpClient) { }
  url="http://localhost:8082/labstore";
  
  addLabStore(labstore)
  {
    console.log("In service :" +labstore);
    return this.http.post<number>(this.url+'/addLabStore',labstore);
  }
  
  public getAllLab()
  {
    return this.http.get("http://localhost:8082/labstore/getAll");
  }

  public deleteLabStore(subinventory_Id)
  {
    return this.http.delete("http://localhost:8082/labstore/delete/"+subinventory_Id);
  }

  public editLabStore(subinventory_Id)
  {
    return this.http.get("http://localhost:8082/labstore/getLabStore/"+subinventory_Id);
  }

  public updateLabStore(labstore)
  {
  console.log("In service :" +labstore);
   return this.http.put<LabStoreMaster[]>("http://localhost:8082/labstore/update",labstore);
  }


}
