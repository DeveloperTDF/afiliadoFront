import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'listarea',
  //   loadChildren: () => import('./listarea/listarea.module').then( m => m.ListareaPageModule)
  // },
  
  // {
  //   path: 'agregar-tarea',
  //   loadChildren: () => import('./agregar-tarea/agregar-tarea.module').then( m => m.AgregarTareaPageModule)
  // },
  
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
