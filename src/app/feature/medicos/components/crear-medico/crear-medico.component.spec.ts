import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Medico } from '@shared/models/medico';
import { Observable, of, throwError } from 'rxjs';
import { MedicoService } from '../../shared/service/medico.service';

import { CrearMedicoComponent } from './crear-medico.component';

describe('CrearMedicoComponent', () => {
  let component: CrearMedicoComponent;
  let fixture: ComponentFixture<CrearMedicoComponent>;
  let medicoService: MedicoService;

  const mockMedico: Medico = {
    id: 99,
    nombre: 'Juan',
    apellido: 'Perez',
    fechaNacimiento: '1999-04-23',
    especialidad: 'Medicina general',
    telefono: '3241222312'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MedicoService,
        HttpService
      ],
      declarations: [ CrearMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    medicoService = TestBed.inject(MedicoService);
    fixture = TestBed.createComponent(CrearMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se maneja error en el subscribe', () => {

    const mockCall = spyOn(medicoService, 'guardarMedico').and.returnValues(
      throwError({status: 404})
    );
    component.crearMedico(mockMedico);
    expect(mockCall).toHaveBeenCalled();

  });

  it('Se ejecuto el complete de forma exitosa', () => {
    const mockCall = spyOn(medicoService, 'guardarMedico').and.returnValues(
      of()
    );
    component.crearMedico(mockMedico);
    expect(mockCall).toHaveBeenCalled();
  });

  it('Metodo crear es llamado', () => {
    const crearSpy = spyOn(medicoService, 'guardarMedico').and.returnValue(
      new Observable<boolean>()
    );
    component.crearMedico(mockMedico);
    expect(crearSpy).toHaveBeenCalled();
  });
});
