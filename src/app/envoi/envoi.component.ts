import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.component.html',
  styleUrls: ['./envoi.component.scss']
})
export class EnvoiComponent implements OnInit {

  envoiData = {};

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
  }

  envoi() {
  this.appService.envoi(this.envoiData)
  .subscribe(
       res => {
  console.log(res);
  this.router.navigate(['/envoi']);
    },
    err => console.log(err)
  );

}

}
