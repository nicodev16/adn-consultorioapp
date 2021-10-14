import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { BorrarProductoComponent } from './borrar-producto.component';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductoService } from '@producto/shared/service/producto.service';
import { HttpService } from '@core/services/http.service';
import { Observable, of, throwError } from 'rxjs';

describe('BorrarProductoComponent', () => {
  let component: BorrarProductoComponent;
  let fixture: ComponentFixture<BorrarProductoComponent>;
  let productoService: ProductoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarProductoComponent ],
      imports: [
        CommonModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        ProductoService,
        HttpService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    productoService = TestBed.inject(ProductoService);
    fixture = TestBed.createComponent(BorrarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se maneja el error en el subscribe', () => {
    const mockCall = spyOn(productoService, 'eliminar').and.returnValues(
      throwError({status: 404})
    );
    component.borrar();
    expect(mockCall).toHaveBeenCalled();
  });

  it('Se ejecuto el complete de forma exitosa', () => {
    const mockCall = spyOn(productoService, 'eliminar').and.returnValues(
      of()
    );
    component.borrar();
    expect(mockCall).toHaveBeenCalled();
  });

  it('CitaService metodo eliminar es llamado', () => {
    const citaSpy = spyOn(productoService, 'eliminar').and.returnValues(
      new Observable<boolean>()
    );

    component.borrar();

    expect(citaSpy).toHaveBeenCalled();
  });
});
