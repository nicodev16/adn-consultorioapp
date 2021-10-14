import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Observable, of, throwError } from 'rxjs';
import { MedicoService } from '../../shared/service/medico.service';

import { BorrarMedicoComponent } from './borrar-medico.component';

describe('BorrarMedicoComponent', () => {
  let component: BorrarMedicoComponent;
  let fixture: ComponentFixture<BorrarMedicoComponent>;
  let medicoService: MedicoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MedicoService,
        HttpService
      ],
      declarations: [ BorrarMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    medicoService = TestBed.inject(MedicoService);
    fixture = TestBed.createComponent(BorrarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se maneja error en el subscribe', () => {

    const mockCall = spyOn(medicoService, 'eliminarMedico').and.returnValues(
      throwError({status: 404})
    );
    component.borrar();
    expect(mockCall).toHaveBeenCalled();

  });

  it('Se ejecuto el complete de forma exitosa', () => {
    const mockCall = spyOn(medicoService, 'eliminarMedico').and.returnValues(
      of()
    );
    component.borrar();
    expect(mockCall).toHaveBeenCalled();
  });

  it('metodo borrar es llamado', () => {
    const borrarSpy = spyOn(medicoService, 'eliminarMedico').and.returnValue(
      new Observable<boolean>()
    );
    component.borrar();
    expect(borrarSpy).toHaveBeenCalled();
  });


});
