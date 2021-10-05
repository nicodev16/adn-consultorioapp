export class Medico {
  id: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  especialidad: string;
  telefono: string;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    fechaNacimiento: string,
    especialidad: string,
    telefono: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.especialidad = especialidad;
    this.telefono = telefono;
  }
}
