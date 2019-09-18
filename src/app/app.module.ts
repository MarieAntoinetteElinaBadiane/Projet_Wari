import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CompteComponent } from './compte/compte.component';
import { DepotComponent } from './depot/depot.component';
import { EnvoiComponent } from './envoi/envoi.component';
import { RetraitComponent } from './retrait/retrait.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { ListerComponent } from './lister/lister.component';
import { AuthGuard } from './auth.guard';
import { ListComponent } from './list/list.component';
import { AjoutService } from './services/ajout.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { DepotlistComponent } from './depotlist/depotlist.component';
import { ComptelistComponent } from './comptelist/comptelist.component';
import { ContractComponent } from './contract/contract.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    LoginComponent,
    UserComponent,
    CompteComponent,
    DepotComponent,
    EnvoiComponent,
    RetraitComponent,
    PartenaireComponent,
    ListerComponent,
    ListComponent,
    TransactionlistComponent,
    DepotlistComponent,
    ComptelistComponent,
    ContractComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [TokenInterceptorService,
  AuthService, AjoutService, AuthGuard,
  AppService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
  multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
