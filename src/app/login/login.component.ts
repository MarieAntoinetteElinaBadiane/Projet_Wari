import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  helper = new JwtHelperService();
  authentService: any;
  roles: any;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

loginUser() {

this.auth.loginUser(this.loginUserData)
.subscribe(
  res => {
    console.log(this.loginUserData);
    // console.log(res);
    localStorage.setItem('token', res.token);
    const decodedToken = this.helper.decodeToken(res.token);
    console.log(decodedToken);
    localStorage.setItem('username', decodedToken.username);
    localStorage.setItem('roles', decodedToken.roles[0]);
    localStorage.setItem('expiration', decodedToken.exp);
    console.log(localStorage);

     this.rol(decodedToken.roles[0]);

    this.router.navigate(['/']);
  },
  err => console.log(err)
  );

}
  rol(arg0: any) {
    throw new Error("Method not implemented.");
  }

// isSuperAdmin() {
//   return this.roles.indexOf('ROLE_SuperAdmin') >= 0;
// }
// isAdmin() {
//  return this.roles.indexOf('ROLE_Admin') >= 0;
// }
// isUser() {
//  return this.roles.indexOf('ROLE_User') >= 0;
// }
// isCaissier() {
//  return this.roles.indexOf('ROLE_Caissier') >= 0;
// }
// isAuthenticated() {
//  return this.roles && (this.isAdmin || this.isCaissier || this.isSuperAdmin || this.isUser);
// }





}
