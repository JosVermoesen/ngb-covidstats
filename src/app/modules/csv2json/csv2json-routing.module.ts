import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Csv2JsonComponent } from './csv2json.component';

const routes: Routes = [{ path: '', component: Csv2JsonComponent   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Csv2JsonRoutingModule {}
