import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductoService } from './producto.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpResponse } from '@angular/common/http';
import { Cita } from '@home/shared/models/cita';

describe('ProductoService', () => {
  let httpMock: HttpTestingController;
  let service: ProductoService;
  const apiEndpointProductoConsulta = `${environment.endpoint}/citas`;
  const apiEndpointProductos = `${environment.endpoint}/citas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ProductoService);
  });

  it('should be created', () => {
    const productService: ProductoService = TestBed.inject(ProductoService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar productos', () => {
    const dummyProductos = [
      new Cita("1", "2021-04-05", "medicina general", {
        id: 5,
        nombre: "William",
        apellido: "Osler",
        fechaNacimiento: "1973-09-03",
        especialidad: "Medico general",
        telefono: "322828392",
      }),
      new Cita("2", "2021-04-06", "medicina general", {
        id: 6,
        nombre: "Sigmund",
        apellido: "Freud",
        fechaNacimiento: "1983-04-03",
        especialidad: "Neurologo",
        telefono: "23423223",
      })
    ];
    service.consultar().subscribe(productos => {
      expect(productos.length).toBe(2);
      expect(productos).toEqual(dummyProductos);
    });
    const req = httpMock.expectOne(apiEndpointProductoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProductos);
  });

  it('deberia crear un producto', () => {
    const dummyProducto = new Cita("1", "2021-04-06", "medicina general", {
      id: 6,
      nombre: "Sigmund",
      apellido: "Freud",
      fechaNacimiento: "1983-04-03",
      especialidad: "Neurologo",
      telefono: "23423223",
    });
    service.guardar(dummyProducto).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointProductos);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un producto', () => {
    const dummyProducto = new Cita("1", "2021-04-06", "medicina general", {
      id: 6,
      nombre: "Sigmund",
      apellido: "Freud",
      fechaNacimiento: "1983-04-03",
      especialidad: "Neurologo",
      telefono: "23423223",
    });
    service.eliminar(dummyProducto).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointProductos}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
