import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentserviceService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8082/document';

  addDocument(document)
  {
    console.log("In service :" +document);
    return this.http.post<number>(this.url+'/addDocument',document);
  
  }


}
