import { DateControl } from '@core/components/form/shared/models/date';
import { SelectControl } from '@core/components/form/shared/models/select';
import { SelectObjectControl } from '@core/components/form/shared/models/select-objects';
import { TextBoxControl } from '@core/components/form/shared/models/textbox';

export class ProductoMockService {

  getCitasByFecha() {
    return [
      {
        id: 111,
        fecha: '2021-10-13 15:30',
        especialidad: 'Medicina General',
        medico: {
          id: 5,
          nombre: 'William',
          apellido: 'Osler',
          fechaNacimiento: '1973-09-03',
          especialidad: 'Medico general',
          telefono: '322828392',
        },
      },
      {
        id: 112,
        fecha: '2021-10-14 15:30',
        especialidad: 'Medicina General',
        medico: {
          id: 5,
          nombre: 'William',
          apellido: 'Osler',
          fechaNacimiento: '1973-09-03',
          especialidad: 'Medico general',
          telefono: '322828392',
        },
      },
      {
        id: 113,
        fecha: '2021-10-15 15:30',
        especialidad: 'Medicina General',
        medico: {
          id: 5,
          nombre: 'William',
          apellido: 'Osler',
          fechaNacimiento: '1973-09-03',
          especialidad: 'Medico general',
          telefono: '322828392',
        },
      }
    ];
  }

  guardar() {
    return true;
  }

  getControls() {
    return [
      new TextBoxControl({
        key: 'id',
        label: 'Id Cita',
        required: true,
        type: 'text',
        order: 1
      }),
      new DateControl({
        key: 'fecha',
        label: 'Fecha de la cita',
        required: true,
        type: 'datetime-local',
        order: 2
      }),
      new SelectControl({
        key: 'especialidad',
        label: 'Especialidad de la cita',
        required: true,
        order: 3,
        options: [
          {key: 'otorinolaringologia', value: 'Otorinolaringologia'},
          {key: 'oncologia', value: 'Oncologia'},
          {key: 'bacteriologia', value: 'Bacteriologia'},
          {key: 'proctologia', value: 'Proctologia'},
          {key: 'medicina general', value: 'Medicina General'},
          {key: 'neurologia', value: 'Neurologia'},
          {key: 'oftanmologia', value: 'Oftanmologia'},
        ]
      }),
      new SelectObjectControl({
        key: 'medico',
        label: 'Medico',
        required: true,
        type: 'text',
        order: 4,
      }),
    ];
  }

}
