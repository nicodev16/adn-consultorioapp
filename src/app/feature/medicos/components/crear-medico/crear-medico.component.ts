import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from '@core/components/form/shared/models/control-base';
import { TextBoxControl } from '@core/components/form/shared/models/textbox';
import { Observer, of } from 'rxjs';
import { MedicoService } from '../../shared/service/medico.service';

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.component.html',
  styleUrls: ['./crear-medico.component.sass']
})
export class CrearMedicoComponent implements OnInit {

  medicoForm: FormGroup;
  controlsMedico: ControlBase<string>[] = [];

  constructor(protected medicoService: MedicoService) {
    this.getControls();
  }

  ngOnInit(): void {
    this.construirFormularioMedico();
  }

  getControls() {
    this.controlsMedico = [
      new TextBoxControl({
        key: 'id',
        label: 'Id medico',
        required: true,
        order: 1
      }),
      new TextBoxControl({
        key: 'nombre',
        label: 'Nombre',
        required: true,
        order: 2
      }),
      new TextBoxControl({
        key: 'apellido',
        label: 'Apellido',
        required: true,
        order: 3
      }),
      new TextBoxControl({
        key: 'fechaNacimiento',
        label: 'Fecha Nacimiento',
        required: true,
        order: 4
      }),
      new TextBoxControl({
        key: 'especialidad',
        label: 'Especialidad',
        required: true,
        order: 5
      }),
      new TextBoxControl({
        key: 'telefono',
        label: 'Telefono',
        required: true,
        order: 6
      }),

    ];

    this.controlsMedico.sort();
    return of(this.controlsMedico);

  }

  crearMedico() {
    const observerMedico: Observer<boolean> = {
      next: (value: boolean) => console.log(value),
      error: (error: any) => console.log(error),
      complete: () =>  console.log('complete')
    };
    const { id } = this.medicoForm.value;
    this.medicoForm.get('id').setValue(+id);
    this.medicoService.guardarMedico(this.medicoForm.value).subscribe(observerMedico);
  }

  private construirFormularioMedico() {
    this.medicoForm =  new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      especialidad: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required])
    });
  }

}
