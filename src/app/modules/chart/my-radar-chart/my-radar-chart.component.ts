import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';

@Component({
    selector: 'app-my-radar-chart',
    templateUrl: './my-radar-chart.component.html',
    styleUrls: ['./my-radar-chart.component.css'],
    standalone: true,
    imports: [NgChartsModule],
})
export class MyRadarChartComponent {
  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    { data: [120, 130, 180, 70], label: '2017' },
    { data: [90, 150, 200, 45], label: '2018' },
  ];
  public radarChartType = 'radar';
}
