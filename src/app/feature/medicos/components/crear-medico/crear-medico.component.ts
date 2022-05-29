import { Component } from '@angular/core';
import { ControlBase } from '@core/components/form/shared/models/control-base';
import { Medico } from '../../../../shared/models/medico';
import { Observable } from 'rxjs';
import { MedicoService } from '../../shared/service/medico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.component.html',
  styleUrls: ['./crear-medico.component.sass']
})
export class CrearMedicoComponent {

  controlsMedico: Observable<ControlBase<string>[]>;

  constructor(protected medicoService: MedicoService) {
    this.controlsMedico = this.medicoService.getControlsMedico() ;
  }

  crearMedico(medico: Medico) {
    medico.id = +medico.id;
    this.medicoService.guardarMedico(medico).subscribe(
      (newMedico: Medico) => this.medicoNotificacion(newMedico),
      (error) => this.manageError(error)
    );
  }

  medicoNotificacion(newMedico: Medico) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Se creo de forma exitosa el medico ${newMedico.nombre}`,
      timer: 5000
    });
  }

  manageError(error) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: error.error,
      timer: 5000
    });
  }

}
