import { Component, OnInit  , Inject , Input } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  email: string;
  gender: string;
  address: string;
  dob: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Sew Joen', email: 'sj@hh.com', address: '471 Duncan Avenue New York', gender: 'Male' , dob :'21/07/1992' , action: ''},
  {name: 'John Doe', email: 'jd@jjj.conm', address: '977 Hartway Street SD', gender: 'Male', dob :'01/03/1972' , action: ''},
  {name: 'Rose Smith', email: 'rs@dfgd.com', address: '432 John Doe Platform', gender: 'Female' , dob : '04/03/1989' , action: ''},
];


@Component({
  selector: 'app-table-module',
  templateUrl: './table-module.component.html',
  styleUrls: ['./table-module.component.css']
})

export class TableModuleComponent implements OnInit {
  displayedColumns: string[] = ['email', 'name', 'address', 'gender' , 'dob' , 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
    openDialog(name:any) {
      this.dialog.open(DialogDataExampleDialog, {
        data: name
      });
    }

  
  

}

@Component({
  selector: 'dialog-data-example-dialog',
  template:`
     Are you Sure you want to Delete {{data}}
     <button>YES </button>
     <button>No </button>
     ` 
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: PeriodicElement) {}
}
