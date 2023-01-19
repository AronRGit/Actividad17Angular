import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { EditarComponent } from './editar/editar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    TablaComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    TablaComponent,
    EditarComponent
  ]
})
export class PrincipalModule { }
