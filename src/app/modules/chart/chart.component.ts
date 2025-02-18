import { Component } from '@angular/core';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss'],
    standalone: true,
    imports: [
        TabsModule,
        MyBarChartComponent,
        MyLineChartComponent,
    ],
})
export class ChartComponent {}
