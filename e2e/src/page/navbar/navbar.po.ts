import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.id('home'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));



    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    async clickBotonHome() {
      await this.linkHome.click();
    }
}
