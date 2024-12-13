import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListareaPage } from './listarea.page';

const routes: Routes = [
  {
    path: '',
    component: ListareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListareaPageRoutingModule {}
