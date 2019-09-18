import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService) {}
  title = 'Test-projet';
  deco() {
    localStorage.removeItem('username');
    localStorage.removeItem('roles');
    localStorage.removeItem('expiration');
    localStorage.removeItem('token');
  }
//   ngOnInit(): void {
// this.authService.getToken();
//   }

  isSuperAdmin() {
    return this.authService.isSuperAdmin();
  }
  isAdmin() {
    return this.authService.isAdmin();
  }
  isCaissier() {
    return this.authService.isCaissier();
  }
  isUser() {
    return this.authService.isUser();
  }
  isAuthenticated() {
     return this.authService.rol();
   }
}
