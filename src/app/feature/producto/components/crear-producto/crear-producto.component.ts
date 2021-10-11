import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { Medico } from '@producto/shared/model/medico';
import { Cita } from '@home/shared/models/cita';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.sass']
})
export class CrearProductoComponent implements OnInit {
  listMedicos: Observable<Medico[]>;
  newCita: Cita;
  productoForm: FormGroup;
  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.listMedicos = this.productoServices.getMedicos();
    this.construirFormularioProducto();

  }

  cerar() {
    const observerCita: Observer<boolean> = {
      next: (value: boolean) => {console.log(value)},
      error: (error: any) => {console.log(error)},
      complete: () => {console.log('complete')}
    };
    this.productoServices.guardar(this.productoForm.value).subscribe(observerCita);
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      especialidad: new FormControl('', [Validators.required]),
      medico: new FormControl('', [Validators.required]),
    });
  }
}
