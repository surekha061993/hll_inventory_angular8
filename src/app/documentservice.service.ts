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

  public gelAllDocument()
  {
    return this.http.get("http://localhost:8082/document/getAllDocument")
  }

  public deleteDocument(doc_id)
  {
    return this.http.delete("http://localhost:8082/document/deleteDocument/"+doc_id)
  }

  public editDocument(doc_id)
  {
    return this.http.get("http://localhost:8082/document/getDocument/"+doc_id);
  }

  public updateDocument(document)
  {
  console.log("In service :" +document);
   return this.http.put<Document[]>("http://localhost:8082/document/update",document);
  }

  public searchDocumentByName(docname)
  {
   return this.http.get("http://localhost:8082/document/searchDocumentByName/"+docname);
  }
}
