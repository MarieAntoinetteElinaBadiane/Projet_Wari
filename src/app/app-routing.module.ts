import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DepotComponent } from './depot/depot.component';
import { CompteComponent } from './compte/compte.component';
import { EnvoiComponent } from './envoi/envoi.component';
import { RetraitComponent } from './retrait/retrait.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { ListerComponent } from './lister/lister.component';
import { AuthGuard } from './auth.guard';
import { ListComponent } from './list/list.component';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { DepotlistComponent } from './depotlist/depotlist.component';
import { ComptelistComponent } from './comptelist/comptelist.component';
import { ContractComponent } from './contract/contract.component';


const routes: Routes = [
  { path: 'formulaire', component: FormulaireComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'partenaire', component: PartenaireComponent, canActivate: [AuthGuard] },
  { path: 'lister', component: ListerComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'depotlist', component: DepotlistComponent, canActivate: [AuthGuard] },
  { path: 'comptelist', component: ComptelistComponent, canActivate: [AuthGuard] },
  { path: 'transactionlist', component: TransactionlistComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'depot', component: DepotComponent, canActivate: [AuthGuard] },
  { path: 'compte', component: CompteComponent, canActivate: [AuthGuard] },
  { path: 'envoi', component: EnvoiComponent, canActivate: [AuthGuard] },
  { path: 'retrait', component: RetraitComponent, canActivate: [AuthGuard] },
  { path: 'contract', component: ContractComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
