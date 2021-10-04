import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { Token } from '../shared/models/token.models';
// import { Token } from '../shared/models/token.models';
import { LoginService } from '../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLogin: Observable<string>;
  getData: Observer<string>;

  constructor(private loginService: LoginService, private route: Router) {
    this.getData = {
      next: (value: string) =>  this.navigateHome(value),
      error: (error: any) => this.manageError(error),
      complete: () => this.completeSubscribe()
    }
  }

  ngOnInit(): void {
    this.crearFormularioLogin();
  }

  public login () {
    this.isLogin = this.loginService.login(this.loginForm.value);
    this.isLogin.subscribe(this.getData)
  }

  navigateProduct () {
    this.route.navigate(['/producto'])
  }

  navigateHome (value: string): void  {
    if(typeof value === 'object'){
      let token = value as Token;
      localStorage.setItem('token', token.accessToken)
      this.navigateProduct()
    }
  }

  manageError (error: any): void {
    console.log(error);
  }

  completeSubscribe (): void  {
    console.log('completo el subscribe');
  }




  private crearFormularioLogin() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i')
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }


}
