import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { Observable, Subscription } from 'rxjs';
import { Medico } from '@shared/models/medico';
import { Cita } from '@shared/models/cita';
import { ControlBase } from '@core/components/form/shared/models/control-base';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.sass'],
})
export class CrearProductoComponent implements OnInit {
  listMedicos: Observable<Medico[]>;
  controlsCita: Observable<ControlBase<string>[]>;
  citaSubscription: Subscription;
  constructor(protected productoServices: ProductoService) {}

  ngOnInit() {
    this.controlsCita = this.productoServices.getControls();
  }

  cerar(newCita: Cita) {
    const currentDay = new Date(newCita.fecha).getDay();
    this.productoServices
      .getCitasByFecha(newCita.fecha)
      .subscribe((citas: Cita[]) => {
        if (this.validarFecha(citas, newCita)) {
          alert(
            'No es posible agendar una cita con el mismo medico y a la misma hora'
          );
        } else if (currentDay === 6 || currentDay === 0) {
          alert('No se pueden realizar citas los fines de semana!');
        } else {
          newCita.id = +newCita.id;
          this.productoServices.guardar(newCita).subscribe(
            (cita: Cita) => this.notificacionCreacion(cita),
            (error) => this.manageError(error)
          );
        }
      });
  }

  notificacionCreacion(cita: Cita) {
    debugger;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `La cita con id ${cita.id} fue creada exitosamente`,
      showConfirmButton: false
    });
  }

  manageError(error) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: error.error.message,
      showConfirmButton: false,
      timer: 5000
    });
  }

  validarFecha(citas: Cita[], newCita: Cita): boolean {
    const validDate = new Date(newCita.fecha);
    let isValid = false;
    citas.forEach((cita: Cita) => {
      const validDateCita = new Date(cita.fecha);
      if (cita.medico.id === newCita.medico.id) {
        if (validDateCita.valueOf() === validDate.valueOf()) {
          isValid = true;
        }
      }
    });

    return isValid;
  }
}
