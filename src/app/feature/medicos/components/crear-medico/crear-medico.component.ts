import { Component, OnInit } from '@angular/core';
import { ControlBase } from '@core/components/form/shared/models/control-base';
import { Medico } from '@producto/shared/model/medico';
import { Observable, Observer } from 'rxjs';
import { MedicoService } from '../../shared/service/medico.service';

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.component.html',
  styleUrls: ['./crear-medico.component.sass']
})
export class CrearMedicoComponent implements OnInit {

  controlsMedico: Observable<ControlBase<string>[]>;

  constructor(protected medicoService: MedicoService) {
    this.controlsMedico = this.medicoService.getControlsMedico() ;
  }

  ngOnInit(): void {

  }

  crearMedico(medico: Medico) {

    medico.id = +medico.id;
    const observerMedico: Observer<boolean> = {
      next: (value: boolean) => console.log(value),
      error: (error: any) => console.log(error),
      complete: () =>  console.log('complete')
    };
    this.medicoService.guardarMedico(medico).subscribe(observerMedico);
  }

}
