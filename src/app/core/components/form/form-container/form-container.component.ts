import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../shared/models/control-base';
import { FormService } from '../shared/service/form.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.sass']
})
export class FormContainerComponent implements OnInit {

  @Input() controls: ControlBase<string>[] | null = [];
  @Output() formValue: EventEmitter<{}> = new EventEmitter<{}>();
  form!: FormGroup;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.form = this.formService.createFormGroup(this.controls);
  }

  onSubmit() {
    this.formValue.emit(this.form.value);
  }

}
