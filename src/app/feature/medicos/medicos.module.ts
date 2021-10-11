import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosRoutingModule } from './medicos-routing.module';
import { CrearMedicoComponent } from './components/crear-medico/crear-medico.component';
import { MedicoComponent } from './components/medico/medico.component';
import { ListarMedicoComponent } from './components/listar-medico/listar-medico.component';
import { SharedModule } from '@shared/shared.module';
import { BorrarMedicoComponent } from './components/borrar-medico/borrar-medico.component';
import { CoreModule } from '@core/core.module';



@NgModule({
  declarations: [
    CrearMedicoComponent,
    MedicoComponent,
    ListarMedicoComponent,
    BorrarMedicoComponent
  ],
  exports: [
    CrearMedicoComponent,
    MedicoComponent,
    ListarMedicoComponent,
    BorrarMedicoComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class MedicosModule { }
