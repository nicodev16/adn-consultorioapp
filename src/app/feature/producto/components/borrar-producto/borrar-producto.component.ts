import { Component, Input } from '@angular/core';
import { Cita } from '@shared/models/cita';
import { ProductoService } from '@producto/shared/service/producto.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls: ['./borrar-producto.component.sass']
})
export class BorrarProductoComponent{

  @Input() citaDeleted: Cita;

  constructor(private productoService: ProductoService) { }

  borrar() {
    this.productoService.eliminar(this.citaDeleted).subscribe(this.eliminate, this.manageError);
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

  public eliminate = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Eliminación exitosa',
      showConfirmButton: false,
      timer: 5000
    });
  }



}
