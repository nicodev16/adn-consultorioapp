import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Token } from '../../models/token';
import { ReqLogin } from '../../models/reqLogin';


@Injectable()
export class LoginService {

  constructor(private http: HttpService) { }

  public login (data: ReqLogin) {
    return this.http.doPost<ReqLogin, Token>(`${environment.endpoint}/login`,
                                                          data, this.http.optsName('Ingreso al sistema') );
  }
}
