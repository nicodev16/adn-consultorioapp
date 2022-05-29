import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { ControlBase } from '@core/components/form/shared/models/control-base';
import { DateControl } from '@core/components/form/shared/models/date';
import { SelectControl } from '@core/components/form/shared/models/select';
import { SelectObjectControl } from '@core/components/form/shared/models/select-objects';
import { TextBoxControl } from '@core/components/form/shared/models/textbox';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cita } from '@shared/models/cita';
import { Medico } from '@shared/models/medico';



@Injectable()
export class ProductoService {


  medicos: Observable<Medico[]>;

  constructor(protected http: HttpService) {
    this.medicos = this.getMedicos();
  }

  public consultar() {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas`, this.http.optsName('consultar citas'));
  }

  public guardar(cita: Cita) {
    return this.http.doPost<Cita, Cita>(`${environment.endpoint}/citas`, cita,
                                                this.http.optsName('crear/actualizar citas '));
  }

  public eliminar(cita: Cita) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/citas/${cita.id}`,
                                                 this.http.optsName('eliminar productos'));
  }

  public getCitasByFecha(fecha: string){
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas?fecha=${fecha}`, this.http.optsName('Consulta las citas por fecha'));
  }

  public getCitasPaginate(page: number){
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas?_page=${page}_limit=10`,
                                                this.http.optsName('Consulta las citas paginadas'));
  }

  public getMedicos() {
    return this.http.doGet<Medico[]>(`${environment.endpoint}/medicos`, this.http.optsName('consultar medicos'));
  }

  public getControls() {
    const controlsCita: ControlBase<string>[] = [
      new TextBoxControl({
        key: 'id',
        label: 'Id Cita',
        required: true,
        type: 'text',
        order: 1
      }),
      new DateControl({
        key: 'fecha',
        label: 'Fecha de la cita',
        required: true,
        type: 'datetime-local',
        order: 2
      }),
      new SelectControl({
        key: 'especialidad',
        label: 'Especialidad de la cita',
        required: true,
        order: 3,
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
      new SelectObjectControl({
        key: 'medico',
        label: 'Medico',
        required: true,
        type: 'text',
        order: 4,
        optionsObject: this.medicos
      }),
    ];
    controlsCita.sort();
    return of(controlsCita);
  }
}
