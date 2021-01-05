import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WarehouseMaster } from './model/warehousemaster';

@Injectable({
  providedIn: 'root'
})
export class WarehouseserviceService {
  constructor(private http:HttpClient) { }

  url="http://localhost:8082/warehouse";
  
  addWarehouse(warehouse)
  {
    console.log("In service :" +warehouse);
    return this.http.post<number>(this.url+'/addWarehouse',warehouse);
  }
  
  public getAllWarehouse()
  {
    return this.http.get("http://localhost:8082/warehouse/getAllWarehousex");
  }

  public deleteWarehouse(warehouse_id)
  {
    return this.http.delete("http://localhost:8082/warehouse/delete/"+warehouse_id);
  }

  public editWarehouse(warehouse_id)
  {
    return this.http.get("http://localhost:8082/warehouse/getWarehouse/"+warehouse_id);
  }

  public updateWarehouse(warehouse)
  {
  console.log("In service :" +warehouse);
   return this.http.put<WarehouseMaster[]>("http://localhost:8082/warehouse/update",warehouse);
  }
}
