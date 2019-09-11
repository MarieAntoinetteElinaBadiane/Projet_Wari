import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  imageUrl = '/assets/images/20190330_140619.jpg';
  formUserData = {imageFile : File = null};
 constructor( private appService: AppService,
              private router: Router) { }

 ngOnInit() {
 }
 handleFileInput(file: FileList) {
   this. formUserData.imageFile = file.item(0);
   const reader = new FileReader();
   reader.onload = (event: any) => {
   this.imageUrl = event.target.result;
   };
   reader.readAsDataURL(this. formUserData.imageFile);
   }
    formUser() {

   this.appService. formUser(this. formUserData)
   .subscribe(
        res => {
   console.log(res);
   this.router.navigate(['/partenaire']);
     },
     err => console.log(err)
   );

}

}
