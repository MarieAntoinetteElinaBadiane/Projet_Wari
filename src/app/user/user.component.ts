import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  imageUrl = '/assets/images/14479616_1114726928611996_756676038217360505_n.jpg';
  userData = {imageFile : File = null};
    constructor( private appService: AppService,
                 private router: Router) { }

    ngOnInit() {
    }
    handleFileInput(file: FileList) {
      this.userData.imageFile = file.item(0);
      const reader = new FileReader();
      reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      };
      reader.readAsDataURL(this.userData.imageFile);
      }
      user() {
      this.appService.User(this.userData)
      .subscribe(
           res => {
      console.log(res);
      this.router.navigate(['/compte']);

        },
        err => console.log(err)
      );

  }

}
