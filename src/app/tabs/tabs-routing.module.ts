import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        // logo inicio
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        // agregar
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      // listar 
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      // editar
      {
        path: 'editar/:id',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      // asignar tarea
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      // listar tareas
      {
        path: 'listarea',
        loadChildren: () => import('../listarea/listarea.module').then( m => m.ListareaPageModule)
      },
      //editar asignartarea
      {
        path: 'editarTarea/:id',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      // {
      //   path: 'agregar-tarea',
      //   loadChildren: () => import('../agregar-tarea/agregar-tarea.module').then( m => m.AgregarTareaPageModule)
      // },
      // {
      //   path: 'editarTarea/:id',
      //   loadChildren: () => import('../agregar-tarea/agregar-tarea.module').then( m => m.AgregarTareaPageModule)
      // },
      {
        path:':id',
        loadChildren: () => import('../tab2/tab2.module').then( m=> m.Tab2PageModule)
      },
     
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
