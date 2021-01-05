import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentNumberingMaster } from './model/documentnumberingmaster';
import { Observable } from 'rxjs';
import { Document } from './model/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentnumberingserviceService {
  constructor(private http:HttpClient) { }

  url='http://localhost:8082/documentnumbering';

  addDocument(document)
  {
    console.log("In service :" +document);
    return this.http.post<number>(this.url+'/addDocument',document);
  }

  public getAllDocumentNum()
  {
    return this.http.get("http://localhost:8082/documentnumbering/getAllDocument")
  }

  public deleteDocument(docNumId)
  {
    return this.http.delete("http://localhost:8082/documentnumbering/deleteDocument/"+docNumId)
  }

  public editDocument(docNumId)
  {
    return this.http.get("http://localhost:8082/documentnumbering/getDocument/"+docNumId);
  }

  public updateDocument(document)
  {
  console.log("In service :" +document);
   return this.http.put<DocumentNumberingMaster[]>("http://localhost:8082/documentnumbering/update",document);
  }
  
  public getAllDocument()
  {
    return this.http.get("http://localhost:8082/document/getAllDocument")
  }

  
  public getAllFinancialYear()
  {
    return this.http.get("http://localhost:8082/financialYear/getAll")
  }
}
