import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../shared/models/control-base';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Input() controls: ControlBase<string>;
  @Input() form!: FormGroup;

  constructor() { }

  get isValid() {
    return this.form.controls[this.controls.key].valid;
  }

  ngOnInit(): void {
    console.log(this.form);
    console.log(this.controls.controlType);
  }

}
