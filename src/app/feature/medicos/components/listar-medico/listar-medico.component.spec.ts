import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { MedicoService } from '../../shared/service/medico.service';

import { ListarMedicoComponent } from './listar-medico.component';

describe('ListarMedicoComponent', () => {
  let component: ListarMedicoComponent;
  let fixture: ComponentFixture<ListarMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        MedicoService,
        HttpService
      ],
      declarations: [ ListarMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
