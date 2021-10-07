import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { ReqLogin } from '../../models/ReqLogin';
import { Token } from '../../models/token';


@Injectable()
export class LoginService {

  constructor(private http: HttpService) { }

  public login (data: ReqLogin) {
    return this.http.doPost<ReqLogin, Token>(`${environment.endpoint}/login`,
                                                          data, this.http.optsName('Ingreso al sistema') );
  }
}
