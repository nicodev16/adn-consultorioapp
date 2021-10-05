import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ProductoComponent } from '@producto/components/producto/producto.component';
import { LoginService } from '../shared/services/login/login.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  // let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // let loginService: LoginService;
  // let redirectPage;

  beforeEach(async () => {
    // redirectPage = {
    //   navigate: jasmine.createSpy('navigate')
    // }
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {path: 'producto', component: ProductoComponent}
        ])
      ],
      providers: [
        LoginService,
        HttpService,
        Router
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // loginService = TestBed.inject(LoginService)
    fixture = TestBed.createComponent(LoginComponent);
    // component = fixture.componentInstance;
    fixture.detectChanges();

  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('Inicia sesión almacena en localstorage el token y navega a la pagina productos', fakeAsync(() => {

  //   const inputEmail: HTMLInputElement = document.querySelector('#login')
  //   const inputPassword: HTMLInputElement  = document.querySelector('#password')
  //   const buttonLogin: HTMLButtonElement = document.querySelector('#buttonLogin')

  //   const email = 'nicolas.martin@ceiba.com.co'
  //   const password = 'contrasena123'

  //   const spyLogin = spyOn(loginService, 'login').and.callThrough();
  //   const event = new Event('input', {bubbles: true})

  //   inputEmail.value = email
  //   inputEmail.dispatchEvent(event)

  //   inputPassword.value = password
  //   inputPassword.dispatchEvent(event)

  //   buttonLogin.click()

  //   fixture.detectChanges()

  //   tick(1000)

  //   expect(spyLogin).toHaveBeenCalled()
  //   expect(redirectPage.navigate).toHaveBeenCalled()

  // }))
});
