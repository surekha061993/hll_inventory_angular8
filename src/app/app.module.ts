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
import { FormmasterComponent } from './admin/formmaster/formmaster.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FinancialyearComponent } from './financialyear/financialyear.component';

import { from } from 'rxjs';
import { DocumentnumberingComponent } from './documentnumbering/documentnumbering.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    DocumentmasterComponent,
    FormmasterComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    FinancialyearComponent,
    DocumentnumberingComponent
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
