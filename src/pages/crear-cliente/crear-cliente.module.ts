import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearClientePage } from './crear-cliente';

@NgModule({
  declarations: [
    CrearClientePage,
  ],
  imports: [
    IonicPageModule.forChild(CrearClientePage),
  ],
})
export class CrearClientePageModule {}
