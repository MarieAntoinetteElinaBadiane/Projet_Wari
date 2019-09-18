import { Component, OnInit } from '@angular/core';
import { AjoutService } from '../services/ajout.service';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  partenaire_id: number;
  compte_id: number;
  username: string;
  roles: string;
  nom: string;
  prenom: string;
  statut: string;
}



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private ajout: AjoutService,
              private router: Router) { }
    users = [];
    dataSource: any;
      ngOnInit() {
    this.ajout.getuser()
    .subscribe(
    res => {
      this.users = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(this.users);

      this.router.navigate(['/list']);
    },
    err => console.log(err)
    );
}

// tslint:disable-next-line:member-ordering
displayedColumns: string[] = ['id', 'username', 'roles', 'nom', 'prenom', 'statut'];
//  dataSource = new MatTableDataSource(ELEMENT_DATA);

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
bloquer(donner){
  console.log(donner);
username=null;
 }
OnSubmit(username)
  {
    this.bloquer.username=username;
    this.ajoutService.OnSubmit(this.bloquer) .subscribe(
      res=>{
        this.ngOnInit();
        console.log(res)
      },
      err=>{
        console.log(err)
      })
  }
}

