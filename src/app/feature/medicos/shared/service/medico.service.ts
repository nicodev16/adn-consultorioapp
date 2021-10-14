import { Injectable } from '@angular/core';
import { ControlBase } from '@core/components/form/shared/models/control-base';
import { DateTimeControl } from '@core/components/form/shared/models/datetime';
import { SelectControl } from '@core/components/form/shared/models/select';
import { TextBoxControl } from '@core/components/form/shared/models/textbox';
import { HttpService } from '@core/services/http.service';
import { Medico } from '@producto/shared/model/medico';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MedicoService {


  constructor(private http: HttpService) { }

  public getMedicos() {
    return this.http.doGet<Medico[]>(`${environment.endpoint}/medicos`, this.http.optsName('Consultar medicos'));
  }

  public guardarMedico(medico: Medico) {
    return this.http.doPost<Medico, boolean>(`${environment.endpoint}/medicos`, medico ,
                                                                      this.http.optsName('crear/actualizar medico'));
  }

  public eliminarMedico(medico: Medico) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/medicos/${medico.id}`,
                                                                        this.http.optsName('eliminar medico'));
  }


  public getControlsMedico() {
    const controls: ControlBase<string>[] = [
      new TextBoxControl({
        key: 'idMedico',
        label: 'Id medico',
        required: true,
        type: 'text',
        order: 1
      }),
      new TextBoxControl({
        key: 'nombre',
        label: 'Nombre',
        required: true,
        type: 'text',
        order: 2
      }),
      new TextBoxControl({
        key: 'apellido',
        label: 'Apellido',
        required: true,
        type: 'text',
        order: 3
      }),
      new DateTimeControl({
        key: 'fechaNacimiento',
        label: 'Fecha Nacimiento',
        required: true,
        type: 'date',
        order: 4,
      }),
      new SelectControl({
        key: 'especialidadMedico',
        label: 'Especialidad',
        required: true,
        order: 5,
        options: [
          {key: 'otorinolaringologia', value: 'Otorinolaringologia'},
          {key: 'oncologia', value: 'Oncologia'},
          {key: 'bacteriologia', value: 'Bacteriologia'},
          {key: 'proctologia', value: 'Proctologia'},
          {key: 'medicina general', value: 'Medicina General'},
          {key: 'neurologia', value: 'Neurologia'},
          {key: 'oftanmologia', value: 'Oftanmologia'},
        ]
      }),
      new TextBoxControl({
        key: 'telefono',
        label: 'Telefono',
        required: true,
        type: 'text',
        order: 6
      }),
    ];

    controls.sort();
    return of(controls);
  }
}
