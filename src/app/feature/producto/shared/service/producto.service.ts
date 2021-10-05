import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Cita } from '@home/shared/models/cita';
import { environment } from 'src/environments/environment';
import { Medico } from '../model/medico';



@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas`, this.http.optsName('consultar citas'));
  }

  public guardar(cita: Cita) {
    return this.http.doPost<Cita, boolean>(`${environment.endpoint}/citas`, cita,
                                                this.http.optsName('crear/actualizar citas '));
  }

  public eliminar(cita: Cita) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/citas/${cita.id}`,
                                                 this.http.optsName('eliminar productos'));
  }


  public getMedicos() {
    return this.http.doGet<Medico[]>(`${environment.endpoint}/medicos`, this.http.optsName('consultar medicos'))
  }
}
