import { Component } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
})
export class FooterComponent {
  version: string = environment.version;
  year = new Date().getFullYear();
}
