import { Component, Input} from '@angular/core';
import { Medico } from '@producto/shared/model/medico';
import { Observer } from 'rxjs';
import { MedicoService } from '../../shared/service/medico.service';

@Component({
  selector: 'app-borrar-medico',
  templateUrl: './borrar-medico.component.html',
  styleUrls: ['./borrar-medico.component.sass']
})
export class BorrarMedicoComponent {

  @Input() medicoDeleted: Medico;

  constructor(protected medicoService: MedicoService) { }


  borrar() {
    const observerDelete: Observer<boolean> = {
      next: (value: boolean) => console.log(value),
      error: (error: any) => console.log(error),
      complete: () => console.log('complete subscribe')
    };
    this.medicoService.eliminarMedico(this.medicoDeleted).subscribe(observerDelete);
  }

}
