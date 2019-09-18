import { Component, OnInit } from '@angular/core';
import { AjoutService } from '../services/ajout.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
id: number;
numerocompte: number;
solde: number;
}

@Component({
  selector: 'app-comptelist',
  templateUrl: './comptelist.component.html',
  styleUrls: ['./comptelist.component.scss']
})
export class ComptelistComponent implements OnInit {

  constructor(private ajout: AjoutService,
              private router: Router) { }
    comptes = [];
    dataSource: any;
      ngOnInit() {

    this.ajout.getcompte()
    .subscribe(
    res => {
      this.comptes = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(this.comptes);

      this.router.navigate(['/comptelist']);
    },
    err => console.log(err)
    );

}
// tslint:disable-next-line:member-ordering
displayedColumns: string[] = ['id', 'numerocompte', 'solde'];
//  dataSource = new MatTableDataSource(ELEMENT_DATA);

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


}
