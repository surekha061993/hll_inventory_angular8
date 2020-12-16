import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PackingMaster } from './model/packingmaster';

@Injectable({
  providedIn: 'root'
})
export class PackingmasterserviceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8082/packing";
  
  addPacking(packing)
  {
    console.log("In service :" +packing);
    return this.http.post<number>(this.url+'/addPacking',packing);
  }
  
  public getAllPack()
  {
    return this.http.get("http://localhost:8082/packing/getAll");
  }

  public deletePacking(packId)
  {
    return this.http.delete("http://localhost:8082/packing/delete/"+packId);
  }

  public editPacking(packId)
  {
    return this.http.get("http://localhost:8082/packing/getPacking/"+packId);
  }

  public updatePacking(packing)
  {
  console.log("In service :" +packing);
   return this.http.put<PackingMaster[]>("http://localhost:8082/packing/update",packing);
  }

}
