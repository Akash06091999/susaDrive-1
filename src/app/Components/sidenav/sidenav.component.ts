import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddnewfolderComponent } from '../Dialogs/addnewfolder/addnewfolder.component';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  name!: string;
  newname!: string;

  constructor(public dialog: MatDialog) { }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddnewfolderComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }



  ngOnInit(){
  }

}
