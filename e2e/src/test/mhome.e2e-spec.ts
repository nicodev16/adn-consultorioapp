import { browser } from 'protractor';
import { AppPage } from '../app.po';
import { HomePage } from '../page/home/home.po';
import { NavbarPage } from '../page/navbar/navbar.po';



describe('Test home', () => {
  let homePage: HomePage;
  let page: AppPage;
  let navBarPage: NavbarPage;

  beforeEach(() => {
    page = new AppPage();
    homePage = new HomePage();
    navBarPage = new NavbarPage();
  });

  it('Deberia generar las cards correctamente', async () => {

    page.navigateToHome();
    browser.sleep(2000);
    navBarPage.clickBotonHome();


    expect(homePage.contarCards()).toBeGreaterThan(9);
  });
});
