import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMedicoComponent } from './components/crear-medico/crear-medico.component';
import { ListarMedicoComponent } from './components/listar-medico/listar-medico.component';
import { MedicoComponent } from './components/medico/medico.component';

const routes: Routes = [
  {
    path: '',
    component: MedicoComponent,
    children: [
      {
        path: '',
        component: ListarMedicoComponent
      },
      {
        path: 'crear',
        component: CrearMedicoComponent
      },
      {
        path: 'listar',
        component: ListarMedicoComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule {}
