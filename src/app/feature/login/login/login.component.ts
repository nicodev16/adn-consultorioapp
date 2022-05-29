import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Token } from '../../../shared/models/token';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLogin: Subscription;

  constructor(private loginService: LoginService, public route: Router) {}

  ngOnInit(): void {
    this.crearFormularioLogin();
  }

  public login() {
    this.isLogin = this.loginService.login(this.loginForm.value)
        .subscribe((value: Token) => this.navigateHome(value), (error) => this.manageError(error));
  }

  navigateRoute() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ingreso exitoso',
      showConfirmButton: false,
      timer: 1000,
    });
    this.route.navigate(['/home']);
  }

  public navigateHome(value: Token): void {
    const token = value;
    localStorage.setItem('token', token.accessToken);
    this.navigateRoute();
  }

  public manageError(error): void {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: error.error,
      timer: 1000,
    });
  }

  private crearFormularioLogin() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i'
        ),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
