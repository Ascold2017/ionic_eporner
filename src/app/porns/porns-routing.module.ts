import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PornsPage } from './porns.page';

const routes: Routes = [
  {
    path: '',
    component: PornsPage
  },
  {
    path: ':id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PornsPageRoutingModule {}
