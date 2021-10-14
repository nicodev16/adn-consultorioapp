import { by, element } from 'protractor';


export class HomePage {

  private card = element.all(by.css('app-home .card'));

  public async contarCards() {
    return this.card.count();
  }

}
