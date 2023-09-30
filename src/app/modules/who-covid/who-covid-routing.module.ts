import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhoCovidComponent } from './who-covid.component';

const routes: Routes = [{ path: '', component: WhoCovidComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhoCovidRoutingModule {}
