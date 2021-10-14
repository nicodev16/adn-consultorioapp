import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToHome() {
    return browser.get('/home') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getTextId(id) {
    return element(by.id(id)).getText() as Promise<string>;
  }

  getText(selector, etiqueta) {
    return element(by.css(`${selector} ${etiqueta}`)).getText() as Promise<string>;
  }
}
