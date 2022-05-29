import { Component, OnInit } from '@angular/core';
import { Medico } from '../../../../shared/models/medico';
import { Observable, Subscription } from 'rxjs';
import { MedicoService } from '../../shared/service/medico.service';

@Component({
  selector: 'app-listar-medico',
  templateUrl: './listar-medico.component.html',
  styleUrls: ['./listar-medico.component.sass'],
})
export class ListarMedicoComponent implements OnInit {
  public listaMedicos: Observable<Medico[]>;
  public medicosPaginate: Subscription;
  public size = 3;
  public currentPage = 1;
  public limit = 10;

  constructor(protected medicoService: MedicoService) {}

  ngOnInit(): void {
    this.medicosPaginate = this.medicoService
      .getMedicos()
      .subscribe((medicos: Medico[]) => this.getSizeMedicos(medicos));
    this.listaMedicos = this.medicoService.getMedicosPaginate(1);
  }

  loadPage(page: number) {
    this.listaMedicos = this.medicoService.getMedicosPaginate(page);
  }

  getSizeMedicos(medicos: Medico[]) {
    console.log(medicos);
    this.size = medicos.length;
  }
}
