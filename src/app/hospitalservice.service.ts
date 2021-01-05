import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HospitalMaster } from './model/hospitalmaster';

@Injectable({
  providedIn: 'root'
})
export class HospitalserviceService {
  
  constructor(private http:HttpClient) { }
  url="http://localhost:8082/hospital";
  
  addHospital(hospital)
  {
    console.log("In service :" +hospital);
    return this.http.post<number>(this.url+'/addHospital',hospital);
  }
  
  public getAll()
  {
    return this.http.get("http://localhost:8082/hospital/getAll");
  }

  public deleteHospital(idinv_hospital_details)
  {
    return this.http.delete("http://localhost:8082/hospital/delete/"+idinv_hospital_details);
  }

  public editHospital(idinv_hospital_details)
  {
    return this.http.get("http://localhost:8082/hospital/getHospital/"+idinv_hospital_details);
  }

  public updateHospital(hospital)
  {
  console.log("In service :" +hospital);
   return this.http.put<HospitalMaster[]>("http://localhost:8082/hospital/update",hospital);
  }

}
