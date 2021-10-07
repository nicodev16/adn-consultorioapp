import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Observer } from "rxjs";
import { Token } from "../shared/models/token";
import { LoginService } from "../shared/services/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLogin: Observable<Token>;
  loginObserver: Observer<Token>;

  constructor(private loginService: LoginService, public route: Router) {}

  ngOnInit(): void {
    this.crearFormularioLogin();
  }

  public login() {
    this.isLogin = this.loginService.login(this.loginForm.value);
    this.loginObserver = {
      next: (value: Token): void => this.navigateHome(value),
      error: (error: any): void => this.manageError(error),
      complete: (): void => this.completeSubscribe(),
    };
    this.isLogin.subscribe(this.loginObserver);
  }

  navigateRoute() {
    this.route.navigate(["/home"]);
  }

  public navigateHome(value: Token): void {
    console.log('entro al metodo');
    let token = value;
    localStorage.setItem("token", token.accessToken);
    this.navigateRoute();
  }

  public manageError(error: any): void {
    console.log(error);
  }

  public completeSubscribe(): void {
    console.log("completo el subscribe");
  }

  private crearFormularioLogin() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(
          '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i'
        ),
      ]),
      password: new FormControl("", [Validators.required]),
    });
  }
}
