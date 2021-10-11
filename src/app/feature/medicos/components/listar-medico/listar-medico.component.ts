import { Component, OnInit } from '@angular/core';
import { Medico } from '@producto/shared/model/medico';
import { Observable } from 'rxjs';
import { MedicoService } from '../../shared/service/medico.service';

@Component({
  selector: 'app-listar-medico',
  templateUrl: './listar-medico.component.html',
  styleUrls: ['./listar-medico.component.sass']
})
export class ListarMedicoComponent implements OnInit {

  public listaMedicos: Observable<Medico[]>;

  constructor(protected medicoService: MedicoService) { }

  ngOnInit(): void {
    this.listaMedicos = this.medicoService.getMedicos();
  }

}
