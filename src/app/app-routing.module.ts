import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { DocumentmasterComponent } from './documentmaster/documentmaster.component';
import { FormmasterComponent } from './admin/formmaster/formmaster.component';
import { DocumentnumberingComponent } from './documentnumbering/documentnumbering.component';
import { FinancialyearComponent } from './financialyear/financialyear.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin/:userId',component:AdminComponent,
    children:[
      {path: 'form',component: FormmasterComponent },
    ]},
  {path:'user/:userId',component:UserComponent},
  {path: 'document',component: DocumentmasterComponent },
  {path:'document/:docid',component:UserComponent},
  {path:'financial_year',component:FinancialyearComponent},
  {path:'document_numbering',component:DocumentnumberingComponent}
];

@NgModule({
  imports: [
    CommonModule,BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
