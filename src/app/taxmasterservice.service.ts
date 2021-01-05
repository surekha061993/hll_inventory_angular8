import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaxMaster } from './model/taxmaster';

@Injectable({
  providedIn: 'root'
})
export class TaxmasterserviceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8082/tax";
  
  addTax(tax)
  {
    console.log("In service :" +tax);
    return this.http.post<number>(this.url+'/addTaxx',tax);
  }
  
  public getAllTax()
  {
    return this.http.get("http://localhost:8082/tax/getAlltaxx");
  }

  public deleteTax(tax_id)
  {
    return this.http.delete("http://localhost:8082/tax/delete/"+tax_id);
  }

  public editTax(tax_id)
  {
    return this.http.get("http://localhost:8082/tax/getTax/"+tax_id);
  }

  public updateTaxx(tax)
  {
  console.log("In service :" +tax);
   return this.http.put<TaxMaster[]>("http://localhost:8082/tax/update",tax);
  }

}
