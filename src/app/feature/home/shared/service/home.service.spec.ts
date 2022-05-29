
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Cita } from '../../../../shared/models/cita';
import { HomeService } from './home.service';
import { environment } from 'src/environments/environment';



describe('HomeService', () => {

  let service: HomeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService, HomeService],
    });

    service = TestBed.inject(HomeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Servicio HomeService creado correctamente', () => {
    const homeService: HomeService = TestBed.inject(HomeService);
    expect(homeService).toBeTruthy();
  });

  it('Debe traer la lista de citas', () => {
    const dummyCitas = [
      new Cita(1, '2021-04-05', 'medicina general', {
        id: 5,
        nombre: 'William',
        apellido: 'Osler',
        fechaNacimiento: '1973-09-03',
        especialidad: 'Medico general',
        telefono: '322828392',
      }),
      new Cita(2, '2021-04-06', 'medicina general', {
        id: 6,
        nombre: 'Sigmund',
        apellido: 'Freud',
        fechaNacimiento: '1983-04-03',
        especialidad: 'Neurologo',
        telefono: '23423223',
      })
    ];
    service.getCitas().subscribe(citas => {
      expect(citas.length).toBe(2);
      expect(citas).toEqual(dummyCitas);
    });
    const req = httpMock.expectOne(`${environment.endpoint}/citas`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCitas);
  });



});
