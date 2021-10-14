import { Component, Input} from '@angular/core';
import { Cita } from '@home/shared/models/cita';
import { ProductoService } from '@producto/shared/service/producto.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls: ['./borrar-producto.component.sass']
})
export class BorrarProductoComponent{

  @Input() citaDeleted: Cita;
  isDeleted: Observable<boolean>;

  constructor(private productoService: ProductoService) { }

  borrar() {
    const observerDelete: Observer<boolean> = {
      next: (value: boolean) => console.log(value),
      error: (error: any) => console.log(error),
      complete: () => console.log('complete subscribe')
    };
    this.productoService.eliminar(this.citaDeleted).subscribe(observerDelete);
  }

}
