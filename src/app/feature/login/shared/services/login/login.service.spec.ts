import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";

import { ReqLogin } from '../../models/reqLogin';

import { LoginService } from "./login.service";

describe("LoginService", () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService, LoginService],
    });

    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    const loginService: LoginService = TestBed.inject(LoginService);
    expect(loginService).toBeTruthy();
  });

  it("Debe realizar el login", () => {

    const mockToken = {
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pY29sYXMubWFydGluQGNlaWJhLmNvbS5jbyIsImlhdCI6MTYzMzY0NjA3NSwiZXhwIjoxNjMzNjQ5Njc1LCJzdWIiOiIxIn0.XqzAeDRQ6nqSWMoNB7WMu_hmwn3pyAoMaclARB-N2gg",
        user: {
            email: "nicolas.martin@ceiba.com.co",
            id: 1
        }
    }
    const mockLogin = new ReqLogin(
      "nicolas.martin@ceiba.com.co",
      "contrasena123"
    );

    service.login(mockLogin).subscribe((respuesta) => {
      expect(respuesta).toEqual(mockToken)
    });

    const request = httpMock.expectOne(`${environment.endpoint}/login`);
    expect(request.request.method).toBe("POST");
    request.flush(mockToken);
  });
});
