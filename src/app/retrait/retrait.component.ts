import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss']
})
export class RetraitComponent implements OnInit {

  retraitData = {};

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
  }

  retrait() {
    console.log(this.retraitData);
    this.appService.retrait(this.retraitData)
  .subscribe(
       res => {
  console.log(res);
  this.router.navigate(['/retrait']);
    },
    err => console.log(err)
  );

}

}
