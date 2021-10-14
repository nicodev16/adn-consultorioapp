import { Observable } from 'rxjs';

export class ControlBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {}[];
  optionsObject: Observable<{}[]>;

  constructor(options: {
    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: string;
    options?: {}[];
    optionsObject?: Observable<{}[]>;
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label =  options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.optionsObject = options.optionsObject;
  }
}
