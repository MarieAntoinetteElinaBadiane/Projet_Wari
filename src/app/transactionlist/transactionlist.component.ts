import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AjoutService } from '../services/ajout.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.scss']
})
export class TransactionlistComponent implements OnInit {

  constructor(private ajout: AjoutService,
              private router: Router) { }
    transactions = [];
      ngOnInit() {

    this.ajout.gettransaction()
    .subscribe(
    res => {
      this.transactions = res;
      console.log(res);

    },
    err => console.log(err)
    );
    }


}
