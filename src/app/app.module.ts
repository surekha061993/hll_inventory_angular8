import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginService } from './login.service';
import { UserComponent } from './user/user.component';
import { DocumentmasterComponent } from './documentmaster/documentmaster.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FinancialyearComponent } from './financialyear/financialyear.component';

import { from } from 'rxjs';
import { DocumentnumberingComponent } from './documentnumbering/documentnumbering.component';
import { PackingmasterComponent } from './packingmaster/packingmaster.component';
import { FormmasterComponent } from './formmaster/formmaster.component';
import { TaxmasterComponent } from './taxmaster/taxmaster.component';
import { ManufacturermasterComponent } from './manufacturermaster/manufacturermaster.component';
import { CategorymasterComponent } from './categorymaster/categorymaster.component';
import { WarehousemasterComponent } from './warehousemaster/warehousemaster.component';
import { LabstoremasterComponent } from './labstoremaster/labstoremaster.component';
import { UomComponent } from './uom/uom.component';
import { ChargesmasterComponent } from './chargesmaster/chargesmaster.component';
import { HospitalmasterComponent } from './hospitalmaster/hospitalmaster.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    DocumentmasterComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    FinancialyearComponent,
    DocumentnumberingComponent,
    PackingmasterComponent,
    FormmasterComponent,
    TaxmasterComponent,
    ManufacturermasterComponent,
    CategorymasterComponent,
    WarehousemasterComponent,
    LabstoremasterComponent,
    UomComponent,
    ChargesmasterComponent,
    HospitalmasterComponent,
    TermsandconditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
   
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
