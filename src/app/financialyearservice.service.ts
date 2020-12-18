import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FinancialYearMaster } from './model/financialyearmaster';

@Injectable({
  providedIn: 'root'
})
export class FinancialyearserviceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8082/financialYear";
  
  addFinancialYear(financialYear)
  {
    console.log("In service :" +financialYear);
    return this.http.post<number>(this.url+'/addFinancial',financialYear);
  }
  
  // addFinancialYear(financialYear)
  // {
  //   console.log("In service :" +financialYear);
  //   return this.http.post("http://localhost:8082/financialYear/addFinYear",financialYear);
  // }

  public getAllFinancialYear()
  {
    return this.http.get("http://localhost:8082/financialYear/getAll")
  }

  public deleteFinancialYear(finYearId)
  {
    return this.http.delete("http://localhost:8082/financialYear/delete/"+finYearId)
  }

  public editFinancialYear(finYearId)
  {
    return this.http.get("http://localhost:8082/financialYear/getFinancial/"+finYearId);
  }

  public updateFinancialYear(financialyear)
  {
  console.log("In service :" +financialyear);
   return this.http.put<FinancialYearMaster[]>("http://localhost:8082/financialYear/update",financialyear);
  }

}
