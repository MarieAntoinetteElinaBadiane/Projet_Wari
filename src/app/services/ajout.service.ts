import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AjoutService {

  private partenaireUrl = 'http://localhost:8000/api/partenaire';
  private userUrl = 'http://localhost:8000/api/listeruser';
  private transactionUrl = 'http://localhost:8000/api/transaction';
  private depotUrl = 'http://localhost:8000/api/faire';
  private compteUrl = 'http://localhost:8000/api/compt';

  constructor(private httpClient: HttpClient) {}
getpartenaire() {
  return this.httpClient.get<any>(this.partenaireUrl);
}
getuser() {
  return this.httpClient.get<any>(this.userUrl);
}
gettransaction() {
  return this.httpClient.get<any>(this.transactionUrl);
}
getdepot() {
  return this.httpClient.get<any>(this.depotUrl);
}
getcompte() {
  return this.httpClient.get<any>(this.compteUrl);

}
}
