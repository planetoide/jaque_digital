import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { SalesComponent } from './sales/sales.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: UsersComponent
      },
      {
        path: 'sales',
        component: SalesComponent
      }
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent, UsersComponent, SalesComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModule { }
