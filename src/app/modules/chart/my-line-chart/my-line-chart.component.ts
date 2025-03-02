import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';

@Component({
    selector: 'app-my-line-chart',
    templateUrl: './my-line-chart.component.html',
    styleUrls: ['./my-line-chart.component.css'],
    standalone: true,
    imports: [NgChartsModule],
})
export class MyLineChartComponent {
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public lineChartLabels = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];
}
