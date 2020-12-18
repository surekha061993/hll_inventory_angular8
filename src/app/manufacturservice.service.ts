import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManufacturerMaster } from './model/ManufacturerMaster';

@Injectable({
  providedIn: 'root'
})
export class ManufacturserviceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8082/manufactur";
  
  addManufactur(manufactur)
  {
    console.log("In service :" +manufactur);
    return this.http.post<number>(this.url+'/addManufacturer',manufactur);
  }
  
  public getAllManufactur()
  {
    return this.http.get("http://localhost:8082/manufactur/getAll");
  }

  public deleteManufacturer(manufacturerId)
  {
    return this.http.delete("http://localhost:8082/manufactur/delete/"+manufacturerId);
  }

  public editManufactur(manufacturerId)
  {
    return this.http.get("http://localhost:8082/manufactur/getId/"+manufacturerId);
  }

  public updateManufactur(manufactur)
  {
  console.log("In service :" +manufactur);
   return this.http.put<ManufacturerMaster[]>("http://localhost:8082/manufactur/update",manufactur);
  }


}
