import { Component } from '@angular/core';

import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [
        {
            provide: CarouselConfig,
            useValue: { interval: 2000, noPause: true, showIndicators: true },
        },
    ],
    standalone: true,
    imports: [
        CarouselModule,
        RouterLink,
        TranslateModule,
    ],
})
export class HomeComponent {}
