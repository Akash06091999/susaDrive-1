import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-filterdialog',
  templateUrl: './filterdialog.component.html',
  styleUrls: ['./filterdialog.component.scss']
})
export class FilterdialogComponent implements OnInit {
  disableSelect = new FormControl(false);
  constructor() { }

  ngOnInit(): void {
  }

}
