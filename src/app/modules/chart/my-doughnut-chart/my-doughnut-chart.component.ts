import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';

@Component({
    selector: 'app-my-doughnut-chart',
    templateUrl: './my-doughnut-chart.component.html',
    styleUrls: ['./my-doughnut-chart.component.css'],
    standalone: true,
    imports: [NgChartsModule],
})
export class MyDoughnutChartComponent {
  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
}
