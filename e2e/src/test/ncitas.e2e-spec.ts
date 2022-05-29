import { browser } from "protractor";
import { CitasPage } from "../page/citas/citas.po";
import { NavbarPage } from "../page/navbar/navbar.po";


describe('Test citas', () => {
  let citasPage: CitasPage;
  let navbarPage: NavbarPage;

  beforeEach(() => {
    citasPage = new CitasPage();
    navbarPage = new NavbarPage();
  });

  it('Debe crear una cita', async () => {

    const idCita = '111';
    const fecha = '9162021133001'

    navbarPage.clickBotonCitas();
    citasPage.clickBotonCrearCita();
    citasPage.navigateToCitas();
    browser.sleep(2000);

    citasPage.ingresarIdCita(idCita);
    citasPage.ingresarFecha(fecha);
    citasPage.ingresarEspecialdiad('Medicina General');
    citasPage.ingresarMedico();
    citasPage.clickGuardar();
    browser.sleep(2000);



  });

});
