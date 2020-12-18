import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Uom} from './model/uom.model';

@Injectable({
  providedIn: 'root'
})

export class UomserviceService {
    constructor(private http:HttpClient) { }

    url='http://localhost:8082/uom';

    addUom(uom)
    {
      console.log("In service :" +uom);
      return this.http.post<number>(this.url+'/addUom',uom);
    }

    public gelAllUom()
    {
        return this.http.get("http://localhost:8082/uom/getAllUom")
    }

    public deleteUom(uomid)
  {
      
    return this.http.delete("http://localhost:8082/uom/deleteUom/"+uomid)
  }

  public editUom(uomid)
  {
    return this.http.get("http://localhost:8082/uom/getUom/"+uomid);
  }

  public updateUom(uom)
  {
  console.log("In service :" +uom);
   return this.http.put<Uom[]>("http://localhost:8082/uom/update",uom);
  }

  public searchUomByName(uomname)
  {
   return this.http.get("http://localhost:8082/uom/searchUomByName/"+uomname);
  }
}