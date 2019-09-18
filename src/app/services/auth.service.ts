import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

private loginUrl = 'http://localhost:8000/api/login_check';
private bloquerUrl = 'http://localhost:8000/bloquer';

loginUser(user) {
  return this.http.post(this.loginUrl, user);
 }
// bloquer(statut) {
//   return this.http.post<any>(this.bloquerUrl, user);

// }
loggedIn() {
return !!localStorage.getItem('token');
}

getToken() {
  return localStorage.getItem('token');
}
rol() {
  return localStorage.getItem('roles');
}

isSuperAdmin() {
  return localStorage.getItem('roles').indexOf('ROLE_SuperAdmin') >= 0;
}
isAdmin() {
  return localStorage.getItem('roles').indexOf('ROLE_Admin') >= 0;
}
isCaissier() {
  return localStorage.getItem('roles').indexOf('ROLE_Caissier') >= 0;
}
isUser() {
  return localStorage.getItem('roles').indexOf('ROLE_User') >= 0;
}

// isAuthenicated() {
//   return this.isAuthenticated ();
// }

}
