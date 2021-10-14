import { browser } from 'protractor';
import { AppPage } from '../app.po';
import { LoginPage } from '../page/login/login.po';


describe('Test Login', () => {
  let loginPage: LoginPage;
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    loginPage = new LoginPage();
  });

  it('Deberia logearse de forma exitosa', async () => {
    const usuario = 'nicolas.martin@ceiba.com.co';
    const password = 'contrasena123';

    page.navigateTo();
    loginPage.ingresarEmail(usuario);
    loginPage.ingresarPassword(password);
    await loginPage.clickButtonLogin();

    browser.sleep(2000);

    expect(page.getText('app-home', 'h1')).toEqual('Citas del día');
  });
});
