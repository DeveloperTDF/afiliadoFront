import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListareaPageRoutingModule } from './listarea-routing.module';

import { ListareaPage } from './listarea.page';
import { ComponentesModule } from '../components/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListareaPageRoutingModule,
    ComponentesModule,
  ],
  declarations: [ListareaPage]
})
export class ListareaPageModule {}
