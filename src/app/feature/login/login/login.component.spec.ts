import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpService } from "@core/services/http.service";
import { Observable, of, throwError } from "rxjs";
import { Token } from "../shared/models/token";
import { LoginService } from "../shared/services/login/login.service";

import { LoginComponent } from "./login.component";

let routerSpy = { navigate: jasmine.createSpy('navigate') };
const tokenMock: Token = {
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pY29sYXMubWFydGluQGNlaWJhLmNvbS5jbyIsImlhdCI6MTYzMzYyMDM4MiwiZXhwIjoxNjMzNjIzOTgyLCJzdWIiOiIxIn0.wAtCdBzmD3UGi6A7zxZL2xPTgWlImyuoKZ-_odN4HjQ",
  user: {
    email: "nicolas.martin@ceiba.com.co",
    id: 1,
  },
};

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        LoginService,
        HttpService,
        {
          provide: Router,
          useValue: routerSpy,
        },
      ],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    loginService = TestBed.inject(LoginService);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Crear formulario de usuario y contraseña y boton de logeo", () => {
    const inputLogin: HTMLInputElement = document.querySelector("#email");
    const inputPassword: HTMLInputElement = document.querySelector("#password");
    const loginButton: HTMLButtonElement =
      document.querySelector("#buttonLogin");

    expect(inputLogin).toBeDefined();
    expect(inputPassword).toBeDefined();
    expect(loginButton).toBeDefined();
  });

  it("Formulario de login es invalido cuando esta vacio", () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it("Redirige al home de forma exitosa", () => {
    component.navigateHome(tokenMock);
    expect(routerSpy.navigate).toHaveBeenCalledWith(["/home"]);
  });

  it('Se maneja error en el subscribe', () => {

    const mockCall = spyOn(loginService, 'login').and.returnValues(
      throwError({status: 404})
    )
    component.login()
    expect(mockCall).toHaveBeenCalled()

  });

  it('Se ejecuto el complete de forma exitosa', () => {
    const mockCall = spyOn(loginService, 'login').and.returnValues(
      of()
    )
    component.login()
    expect(mockCall).toHaveBeenCalled()
  });

  it("Loginservice metodo login es llamado", () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls.email.setValue("nicolas.martin@gmail.com");
    component.loginForm.controls.password.setValue("contrasena123");
    expect(component.loginForm.invalid).toBeTruthy();

    const loginspy = spyOn(loginService, "login").and.returnValue(
      new Observable<Token>()
    );
    component.login();

    expect(loginspy).toHaveBeenCalled();
  });
});
