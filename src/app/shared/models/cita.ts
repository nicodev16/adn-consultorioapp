import { Medico } from './medico';

export class Cita {
  id: number;
  fecha: string;
  especialidad: string;
  medico: Medico;

  constructor(
    id: number,
    fecha: string,
    especialidad: string,
    medico: Medico
  ) {
    this.id = id;
    this.fecha = fecha;
    this.especialidad = especialidad;
    this.medico = medico;
  }
}


