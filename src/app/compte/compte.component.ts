import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  compteData = {};
  constructor( private appService: AppService,
               private router: Router) { }
  ngOnInit() {
  }
    compte() {
    this.appService.compte(this.compteData)
    .subscribe(
         res => {
    console.log(res);
    this.router.navigate(['/compte']);
      },
      err => console.log(err)
    );

}

}
