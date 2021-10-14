import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from '../models/control-base';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  createFormGroup(controls: ControlBase<string>[]) {
    const group = {};


    controls.forEach((control) => {
      group[control.key] = control.required
        ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}
