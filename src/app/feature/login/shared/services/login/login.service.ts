import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Token } from '../../models/token';


@Injectable()
export class LoginService {

  constructor(private http: HttpService) { }

  public login (data) {
    return this.http.doPost<Token, Token>(`${environment.endpoint}/login`,
                                                          data, this.http.optsName('Ingreso al sistema') );
  }
}
