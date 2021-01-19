import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologiesPage } from './technologies.page';

const routes: Routes = [
  {
    path: '',
    component: TechnologiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologiesPageRoutingModule {}
