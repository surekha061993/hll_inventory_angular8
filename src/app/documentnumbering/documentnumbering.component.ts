import { Component, OnInit } from '@angular/core';
import { DocumentnumberingserviceService } from '../documentnumberingservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../model/login.model';
import { DocumentNumberingMaster } from '../model/documentnumberingmaster';
import { Document } from '../model/document.model';
import { FinancialYearMaster } from '../model/financialyearmaster';
/**
 * @author Surekha Londhe
 * @Date 04-01-2021
 */
@Component({
  selector: 'app-documentnumbering',
  templateUrl: './documentnumbering.component.html',
  styleUrls: ['./documentnumbering.component.css']
})
export class DocumentnumberingComponent implements OnInit {
  documentlist;
  financialyearlist;

  docdata: Document[] = [];

  document = new DocumentNumberingMaster();
  
  docmaster = new Document();
  login = new Login();
  doc1: any = [];
  showDiv: boolean = true;
  editDiv: boolean = false;

  documents: any;
  docname: string;
  //docDeleteFlag:number;

  doc: any = {};
  constructor(private documentService: DocumentnumberingserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.documentService.getAllDocument().subscribe(documentlist => {
      this.documentlist = documentlist;
     // console.log(documentlist);
    });

    this.documentService.getAllFinancialYear().subscribe(financialyearlist => {
      this.financialyearlist = financialyearlist;
     // console.log(financialyearlist);
    });
    let response = this.documentService.getAllDocumentNum();
    response.subscribe((data) => this.documents = data)
  }
  selectedCountry: Document = new Document();

  onSelect(docNumId) {
    this.selectedCountry = null;
    for (var i = 0; i < this.documentlist.length; i++) {
      if (this.documentlist[i].docNumId == docNumId) {
        this.selectedCountry = this.documentlist[i];
      }
    }
  //  alert(i);
  }

  getAllDocuments() {
    let response = this.documentService.getAllDocument();
    response.subscribe((data) => this.doc1 = data);
    console.log("hi" + this.doc1);
  }
  // docNumId:number
	// docSeries:string
	// docNo:number;
	// document=new Document;
	// docPrefix:string;
	// docSuffix:string
	// year=new FinancialYearMaster;
	// docDeleteFlag:number;
  // docUpdateDate:Date;

  saveDocuments() {
    // let docData={"docNumId": this.docNumId,
    //   "docSeries":this.docSeries,
    //   "docNo":this.docNo,
    //   "document":{docid:this.document},
    //   "docPrefix":this.docPrefix,
    //   "docSuffix":this.docSuffix,
    //   "year":{year_id:this.year},
    //   "docDeleteFlag":this.docDeleteFlag,
    //   "docUpdateDate":this.docUpdateDate
    //  };
    // let response = this.documentService.addDocument(this.document1);
    // response.subscribe((docData) => this.documents = docData);
     let response = this.documentService.addDocument(this.document);
     response.subscribe((data) => this.documents = data);
    
  }

  public editDocument(docNumId: number) {
    this.showDiv = false;
    this.editDiv = true;

    let response = this.documentService.editDocument(docNumId);
    response.subscribe(data => {
      console.log(data);
      this.doc = data
    });
  }

  updateDocuments(u) {
    console.log(u);
    this.documentService.updateDocument(u).subscribe(rs => {
      this.documents = rs;
    });
  }

  public deleteDocument(docNumId: number) {
    let response = this.documentService.deleteDocument(docNumId);
    response.subscribe((data) => this.documents = data);
  }

  logOut() {
    console.log("hiiii");
    sessionStorage.removeItem('token')
    this.router.navigate([''])
  }
}
