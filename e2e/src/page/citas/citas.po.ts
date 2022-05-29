import { browser, by, element } from "protractor";


export class CitasPage {

  private inputIdCita = element(by.id('id'));
  private inputFecha = element(by.id('fecha'));
  private inputEspecialidad = element(by.id('especialidad'));
  private inputMedico = element(by.id('medico'));
  private buttonCrearCita =  element(by.id('crear-cita'));
  private buttonGuardar =  element(by.id('guardar'));



  navigateToCitas(){
    return browser.get('/producto/crear');
  }



  public async clickBotonCrearCita() {
    return this.buttonCrearCita.click();
  }

  public async ingresarIdCita(id: string) {
    await this.inputIdCita.sendKeys(id);
  }

  public async ingresarFecha(fecha: string) {
    await this.inputFecha.sendKeys(fecha);
  }

  public async ingresarEspecialdiad(value: string) {
    await this.inputEspecialidad.sendKeys(value)
  }

  public async ingresarMedico() {
    await this.inputMedico.element(by.cssContainingText('option', 'Alexander Fleming')).click();
  }

  public async clickGuardar() {
    await this.buttonGuardar.click();
  }

}
