import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../../../../shared/models/cita';

@Injectable()
export class HomeService {

  constructor(private http: HttpService) { }

  public getCitas() {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas`, this.http.optsName('consultar citas'));
  }
}
