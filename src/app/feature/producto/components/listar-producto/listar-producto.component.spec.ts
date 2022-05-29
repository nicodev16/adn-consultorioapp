import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarProductoComponent } from './listar-producto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductoService } from '../../shared/service/producto.service';
import { HttpService } from 'src/app/core/services/http.service';
import { Cita } from '@shared/models/cita';

describe('ListarProductoComponent', () => {
  let component: ListarProductoComponent;
  let fixture: ComponentFixture<ListarProductoComponent>;
  let productoService: ProductoService;
  const listaProductos: Cita[] = [
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
    }),
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListarProductoComponent],
        imports: [CommonModule, HttpClientModule, RouterTestingModule],
        providers: [ProductoService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductoComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'consultar').and.returnValue(of(listaProductos));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaProductos.subscribe((resultado) => {
      expect(2).toBe(resultado.length);
    });
  });
});
