import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { waitForAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Cita } from '@home/shared/models/cita';
import { HomeService } from '@home/shared/service/home.service';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: HomeService;
  const listaCitas: Cita[] = [
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
    }),
  ];


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
      ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
      ],
      providers: [
        HomeService,
        HttpService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    homeService = TestBed.inject(HomeService);
    spyOn(homeService, "getCitas").and.returnValue(of(listaCitas));
    fixture.detectChanges();
  });

  it('HomeComponent creado', () => {
    expect(component).toBeTruthy();
    component.listaCitas.subscribe((listCitas) => {
      expect(2).toBe(listCitas.length)
    })
  });

});
