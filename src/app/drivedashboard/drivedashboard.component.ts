import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-drivedashboard',
  templateUrl: './drivedashboard.component.html',
  styleUrls: ['./drivedashboard.component.scss']
})
export class DrivedashboardComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
