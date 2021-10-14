import { by, element } from 'protractor';



export class LoginPage {
  private inputEmail = element(by.id('email'));
  private inputPassword = element(by.id('password'));
  private botonLogin = element(by.id('buttonLogin'));

  public async ingresarEmail(email: string) {
    await this.inputEmail.sendKeys(email);
  }

  public async ingresarPassword(password: string) {
    await this.inputPassword.sendKeys(password);
  }

  public async clickButtonLogin() {
    await this.botonLogin.click();
  }

}
