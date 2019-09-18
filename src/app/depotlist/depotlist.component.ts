import { Component, OnInit } from '@angular/core';
import { AjoutService } from '../services/ajout.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  id: number;
  date: Date;
  montant: number;

}

@Component({
  selector: 'app-depotlist',
  templateUrl: './depotlist.component.html',
  styleUrls: ['./depotlist.component.scss']
})
export class DepotlistComponent implements OnInit {

  constructor(private ajout: AjoutService,
              private router: Router) { }
    depot = [];
    dataSource: any;
      ngOnInit() {

    this.ajout.getdepot()
    .subscribe(
    res => {
      this.depot = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(this.depot);

      this.router.navigate(['/depotlist']);
    },
    err => console.log(err)
    );

}
// tslint:disable-next-line:member-ordering
displayedColumns: string[] = ['id', 'date', 'montant'];
//  dataSource = new MatTableDataSource(ELEMENT_DATA);

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}



}
