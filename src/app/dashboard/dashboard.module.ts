import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { SalesComponent } from './sales/sales.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
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
  imports: [RouterModule.forChild(routes), MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [RouterModule]
})
export class DashboardModule { }
