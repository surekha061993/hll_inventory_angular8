import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { DocumentmasterComponent } from './documentmaster/documentmaster.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'admin/:userId',component:AdminComponent},
  {path:'user/:userId',component:UserComponent},
  {path: 'document',component: DocumentmasterComponent }


];

@NgModule({
  imports: [
    CommonModule,BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
