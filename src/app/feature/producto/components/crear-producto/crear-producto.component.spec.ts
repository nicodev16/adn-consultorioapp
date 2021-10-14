import { waitForAsync, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CrearProductoComponent } from './crear-producto.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductoService } from '../../shared/service/producto.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Cita } from '@home/shared/models/cita';
import { Observable, of } from 'rxjs';
import { ProductoMockService } from '@shared/data/productoMockService';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ControlBase } from '@core/components/form/shared/models/control-base';

describe('CrearProductoComponent', () => {
  let component: CrearProductoComponent;
  let fixture: ComponentFixture<CrearProductoComponent>;
  let productoService: ProductoService;
  const mockCita: Cita = {
    id: 999,
    fecha: '2021-10-13',
    especialidad: 'Medicina General',
    medico: {
      id: 5,
      nombre: 'William',
      apellido: 'Osler',
      fechaNacimiento: '1973-09-03',
      especialidad: 'Medico general',
      telefono: '322828392',
    },
  };
  const mockListCita = new ProductoMockService().getCitasByFecha();
  const mockGuardar = new ProductoMockService().guardar();

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CrearProductoComponent],
        imports: [
          CommonModule,
          HttpClientTestingModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule,
        ],
        providers: [{
          provide: ProductoService,
          useClass: ProductoMockService
        }, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProductoComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'getControls').and.returnValue(
      new Observable<ControlBase<string>[]>()
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se ejecuta la función crear correctamente', fakeAsync(() => {

    spyOn(productoService, 'getCitasByFecha').and.returnValue(of(mockListCita));

    const crearSpy = spyOn(productoService, 'guardar').and.returnValue(of(mockGuardar));
    component.cerar(mockCita);
    tick(1000);
    fixture.detectChanges();
    expect(crearSpy).toHaveBeenCalled();
  }));

});
