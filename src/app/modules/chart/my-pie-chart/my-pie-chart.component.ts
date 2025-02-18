import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';

@Component({
    selector: 'app-my-pie-chart',
    templateUrl: './my-pie-chart.component.html',
    styleUrls: ['./my-pie-chart.component.css'],
    standalone: true,
    imports: [NgChartsModule],
})
export class MyPieChartComponent {
  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
}
