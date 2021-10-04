import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Token } from '../../models/token.models';


@Injectable()
export class LoginService {

  constructor(private http: HttpService) { }

  public login (data) {
    return this.http.doPost<Token, string>(`${environment.endpoint}login`,
                                                          data, this.http.optsName('Ingreso al sistema') );
  }
}
