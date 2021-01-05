import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChargesMaster } from './model/chargesmaster';

@Injectable({
  providedIn: 'root'
})
export class ChargesserviceService {
  constructor(private http:HttpClient) { }
  url="http://localhost:8082/charges";
  
  addCharges(charges)
  {
    console.log("In service :" +charges);
    return this.http.post<number>(this.url+'/addCharges',charges);
  }
  
  public getAll()
  {
    return this.http.get("http://localhost:8082/charges/getAll");
  }

  public deleteCharges(inv_charges_Id)
  {
    return this.http.delete("http://localhost:8082/charges/delete/"+inv_charges_Id);
  }

  public editCharges(inv_charges_Id)
  {
    return this.http.get("http://localhost:8082/charges/getCharges/"+inv_charges_Id);
  }

  public updateCharges(charges)
  {
  console.log("In service :" +charges);
   return this.http.put<ChargesMaster[]>("http://localhost:8082/charges/update",charges);
  }
}
