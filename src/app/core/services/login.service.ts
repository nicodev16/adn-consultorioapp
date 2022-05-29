import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Token } from '../../shared/models/token';
import { ReqLogin } from '../../shared/models/reqLogin';
import { Router } from '@angular/router';


@Injectable()
export class LoginService {

  constructor(private http: HttpService, private router: Router) { }

  public login(data: ReqLogin) {
    return this.http.doPost<ReqLogin, Token>(`${environment.endpoint}/login`,
                                                          data, this.http.optsName('Ingreso al sistema') );
  }

  public logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public getLogged() {
    const token = localStorage.getItem('token');
    if ( token ) {
      return true;
    }
  }
}
