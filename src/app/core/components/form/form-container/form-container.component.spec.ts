import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormService } from '../shared/service/form.service';

import { FormContainerComponent } from './form-container.component';

describe('FormContainerComponent', () => {
  let component: FormContainerComponent;
  let fixture: ComponentFixture<FormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        FormService
      ],
      declarations: [ FormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se realiza la emición de los datos del formulario', () => {
    const spyOnEmit = spyOn(component.formValue, 'emit');

    component.onSubmit();
    expect(spyOnEmit).toHaveBeenCalled();
  });
});
