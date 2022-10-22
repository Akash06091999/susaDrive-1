import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivedashboardComponent } from './drivedashboard/drivedashboard.component';
import { DriveloginComponent } from './drivelogin/drivelogin.component';
import { DefaultComponent } from './layouts/default/default/default.component';
import { ViewfolderComponent } from './viewfolder/viewfolder.component';
const routes: Routes = [
 
  {
    path: '',
    component: DriveloginComponent
  },
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: 'drivedashboard',
      component: DrivedashboardComponent
    },{
      path: 'viewfolder',
      component: ViewfolderComponent
    }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
