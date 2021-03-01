import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { SalesComponent } from './sales/sales.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ChartsModule } from 'ng2-charts';
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
  imports: [RouterModule.forChild(routes),ChartsModule, MatPaginatorModule,MatTableModule,MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [RouterModule]
})
export class DashboardModule { }
