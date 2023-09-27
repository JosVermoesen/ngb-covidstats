import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';

import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

@NgModule({
  declarations: [
    ChartComponent,
    MyBarChartComponent,
    MyLineChartComponent,
    MyDoughnutChartComponent,
    MyRadarChartComponent,
    MyPieChartComponent,
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    NgChartsModule,
    TabsModule.forRoot(),
  ],
})
export class ChartModule {}
