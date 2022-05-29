import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Medico } from '@shared/models/medico';
import { environment } from 'src/environments/environment';

import { MedicoService } from './medico.service';

describe('MedicoService', () => {
  let httpMock: HttpTestingController;
  let service: MedicoService;
  const apiEndpointMedicoConsulta = `${environment.endpoint}/medicos`;
  const apiEndpointMedico = `${environment.endpoint}/medicos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MedicoService, HttpService
      ]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(MedicoService);
  });

  it('should be created', () => {
    const medicoService: MedicoService = TestBed.inject(MedicoService);
    expect(medicoService).toBeTruthy();
  });

  it('Debe listar los medicos', () => {
    const dummyMedicos = [
      new Medico(
        1,
        'William',
        'Osler',
        '1997-04-23',
        'medicina general',
        '30023452323'
      ),
      new Medico(
        2,
        'Jenner',
        'Rico',
        '1997-04-25',
        'medicina general',
        '3002345232'
      )
    ];
    service.getMedicos().subscribe(medicos => {
      expect(medicos.length).toBe(2);
      expect(medicos).toEqual(dummyMedicos);
    });
    const req = httpMock.expectOne(apiEndpointMedicoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMedicos);
  });

  it('deberia crear un medico', () => {
    const dummyMedico = new Medico(1,
      'William',
      'Osler',
      '1997-04-23',
      'medicina general',
      '30023452323'
    );
    service.guardarMedico(dummyMedico).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointMedico);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un medico', () => {
    const dummyMedico = new Medico(1,
      'William',
      'Osler',
      '1997-04-23',
      'medicina general',
      '30023452323'
    );
    service.eliminarMedico(dummyMedico).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointMedico}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
