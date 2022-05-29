import { Component, Input} from '@angular/core';
import { Medico } from '../../../../shared/models/medico';
import { MedicoService } from '../../shared/service/medico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-medico',
  templateUrl: './borrar-medico.component.html',
  styleUrls: ['./borrar-medico.component.sass']
})
export class BorrarMedicoComponent {

  @Input() medicoDeleted: Medico;

  constructor(protected medicoService: MedicoService) { }


  borrar() {
    this.medicoService.eliminarMedico(this.medicoDeleted).subscribe(this.eliminate, this.manageError);
  }

  public manageError = (error) => {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: error.error,
      showConfirmButton: false,
      timer: 5000
    });
  }

  public eliminate = (value: boolean) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Eliminación exitosa' + value,
      showConfirmButton: false,
      timer: 5000
    });
  }

}
