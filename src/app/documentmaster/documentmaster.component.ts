import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login.model';
import { Document } from '../model/document.model'
import { DocumentserviceService } from '../documentservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-documentmaster',
  templateUrl: './documentmaster.component.html',
  styleUrls: ['./documentmaster.component.css']
})
export class DocumentmasterComponent implements OnInit {

  document = new Document();
  login =new Login();

  doc:Document[]=[];
  
  showDiv :boolean=true;
  editDiv :boolean=false;
  
  documents:any;
  docname:string;

  constructor(private documentService:DocumentserviceService,private router:Router,private route : ActivatedRoute) { }

  ngOnInit() {
      let response=this.documentService.gelAllDocument();
      response.subscribe((data)=>this.documents=data)
  }
  
  message:any;

  saveDocuments()
  {
     let response=this.documentService.addDocument(this.document);
     response.subscribe((data)=>this.message=data);
    //this.documentService.addDocument(this.document).subscribe(rs=>{this.document.docid=rs});
    //this.router.navigate(['admin'],{relativeTo:this.route})
  }

  public editDocument(docid:number)
  {
    this.showDiv=false;
    this.editDiv=true;

    let response=this.documentService.editDocument(docid);
    response.subscribe(data =>{
    console.log(data);
    this.documents=data});
  }
  
  updateDocuments() {
    let response=this.documentService.updateDocument(this.document);
    response.subscribe((data)=>this.message=data);
  }

  public deleteDocument(docid:number)
  {
    let response=this.documentService.deleteDocument(docid);
    response.subscribe((data)=>this.documents=data);
  }

  public searchDocumentByName()
  {
    let response=this.documentService.searchDocumentByName(this.docname);
    response.subscribe((data)=>this.documents=data);
  }
}
