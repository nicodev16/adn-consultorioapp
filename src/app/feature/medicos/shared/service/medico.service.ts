import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Medico } from '@producto/shared/model/medico';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpService) { }

  public getMedicos() {
    return this.http.doGet<Medico[]>(`${environment.endpoint}/medicos`, this.http.optsName('Consultar medicos'));
  }

  public guardarMedico(medico: Medico) {
    return this.http.doPost<Medico, boolean>(`${environment.endpoint}/medicos`, medico ,
                                                                      this.http.optsName('crear/actualizar medico'))
  }

  public eliminarMedico(medico: Medico) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/medicos/${medico.id}`,
                                                                        this.http.optsName('eliminar medico'));
  }
}
