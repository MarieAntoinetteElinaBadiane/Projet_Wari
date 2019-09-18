import { Component, OnInit } from '@angular/core';
import { AjoutService } from '../services/ajout.service';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  ninea: string;
  adresse: string;
  raison_sociale: string;
  statut: string;
}

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.scss']
})
export class ListerComponent implements OnInit {

   constructor(private ajout: AjoutService,
               private router: Router) { }
    partenaires = [];
    dataSource: any;
      ngOnInit() {

    this.ajout.getpartenaire()
    .subscribe(
    res => {
      this.partenaires = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(this.partenaires);

      console.log(res);
    },
    err => console.log(err)
    );
    }
    // tslint:disable-next-line:member-ordering
    displayedColumns: string[] = ['id', 'ninea', 'adresse', 'statut'];
  //  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  bloquer(donner){
   console.log(donner);
  }
}
