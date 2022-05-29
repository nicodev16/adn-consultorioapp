import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ProductoService } from '@producto/shared/service/producto.service';
import { Cita } from '@shared/models/cita';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.sass'],
})
export class ListarProductoComponent implements OnInit {
  public citasPaginate: Subscription;
  public listaProductos: Observable<Cita[]>;
  public size: number;
  public currentPage = 1;
  public limit = 10;

  constructor(protected productoService: ProductoService) {}

  ngOnInit() {
    this.citasPaginate = this.productoService
      .consultar()
      .subscribe((citas: Cita[]) => this.getSizeCitas(citas));
    this.listaProductos = this.productoService.getCitasPaginate(1);
  }

  loadPage(page: number) {
    this.listaProductos = this.productoService.getCitasPaginate(page);
  }

  getSizeCitas(citas: Cita[]) {
    this.size = citas.length;
  }

}
