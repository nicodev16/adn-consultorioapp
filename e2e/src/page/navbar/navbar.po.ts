import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.id('home'));
    linkCitas = element(by.id('citas'));

    async clickBotonCitas() {
        await this.linkCitas.click();
    }

    async clickBotonHome() {
      await this.linkHome.click();
    }
}
