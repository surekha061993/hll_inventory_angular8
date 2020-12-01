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
  login=new Login();

  constructor(private documentService:DocumentserviceService,private router:Router,private route : ActivatedRoute) { }

  ngOnInit() {
  }

  saveDocuments()
  {
    //this.login.user_type=this.user_type;
    this.documentService.addDocument(this.document).subscribe(rs=>{this.document.docid=rs});
    this.router.navigate(['admin'],{relativeTo:this.route})
  }

}
