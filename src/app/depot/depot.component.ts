import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  depotData = {};
  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
  }
  depot() {
    this.appService.depot(this.depotData)
    .subscribe(
         res => {
    console.log(res);
    this.router.navigate(['/depot']);
      },
      err => console.log(err)
    );

}

}
