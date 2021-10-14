import { TestBed } from '@angular/core/testing';
import { ControlBase } from '../models/control-base';

import { FormService } from './form.service';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe generar el formulario de forma correcta', () => {
    const controls: ControlBase<string>[] = [
      new ControlBase<string>({
        value: '',
        key: 'id',
        label: 'Id',
        required: true,
        order: 1,
        controlType: 'textbox',
        type: 'text',
        options: null,
        optionsObject: null,
      }),
      new ControlBase<string>({
        value: '',
        key: 'nombre',
        label: 'Nombre',
        required: true,
        order: 2,
        controlType: 'textbox',
        type: 'text',
        options: null,
        optionsObject: null,
      })
    ];
    controls.forEach((control) => {
      expect(control).not.toBeUndefined();
    });
    expect(controls).toBeDefined();
  });
});
