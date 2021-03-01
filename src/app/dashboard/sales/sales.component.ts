import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { ChartDataSets, ChartOptions,  ChartType} from 'chart.js';
import { Label } from 'ng2-charts';
import { Sale } from 'src/app/shared/models/sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.sass']
})
export class SalesComponent implements OnInit {
  public car_make: Label[] = [];
  public quantity: number[] = new Array();

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: this.quantity, label: 'Sales A' }
  ];
  
  constructor(private _commonService: CommonService) { }

  ngOnInit(): void {
    this._commonService.getSales().subscribe(res => {
      res.sales.map((item: Sale) => {
        this.car_make.push(item.car_make);
        this.quantity.push(item.quantity);
      });
    });
  }
}
