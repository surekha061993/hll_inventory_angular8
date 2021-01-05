import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TermsAndCondition } from './model/termscondition';

@Injectable({
  providedIn: 'root'
})
export class TermscoditionserviceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8082/termscondition";
  
  addTermsCondition(termscondition)
  {
    console.log("In service :" + termscondition);
    return this.http.post<number>(this.url+'/addTermsCondition',termscondition);
  }
  
  public getAll()
  {
    return this.http.get("http://localhost:8082/termscondition/getAll");
  }

  public deleteTerms(inv_termsandCondition_master_id)
  {
    return this.http.delete("http://localhost:8082/termscondition/delete/"+inv_termsandCondition_master_id);
  }

  public editTerms(inv_termsandCondition_master_id)
  {
    return this.http.get("http://localhost:8082/termscondition/getTermsCondition/"+inv_termsandCondition_master_id);
  }

  public updateTerms(termscondition)
  {
  console.log("In service :" +termscondition);
   return this.http.put<TermsAndCondition[]>("http://localhost:8082/termscondition/update",termscondition);
  }

}
