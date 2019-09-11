import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {

  imageUrl = '/assets/images/20190330_140619.jpg';
  partUserData = {imageFile : File = null};
 constructor( private appService: AppService,
              private router: Router) { }

 ngOnInit() {
 }
 handleFileInput(file: FileList) {
   this. partUserData.imageFile = file.item(0);
   const reader = new FileReader();
   reader.onload = (event: any) => {
   this.imageUrl = event.target.result;
   };
   reader.readAsDataURL(this. partUserData.imageFile);
   }
    partUser() {

   this.appService. partUser(this. partUserData)
   .subscribe(
        res => {
   console.log(res);
   this.router.navigate(['/user']);
     },
     err => console.log(err)
   );

}

}
