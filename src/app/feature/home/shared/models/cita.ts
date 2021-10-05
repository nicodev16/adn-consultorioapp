import { Medico } from "@producto/shared/model/medico";

export class Cita {
  id: string;
  fecha: string;
  especialidad: string;
  medico: Medico;

  constructor(
    id: string,
    fecha: string,
    especialidad: string,
    medico: Medico
  ) {
    this.id = id
    this.fecha = fecha
    this.especialidad = especialidad
    this.medico = medico
  }
}


