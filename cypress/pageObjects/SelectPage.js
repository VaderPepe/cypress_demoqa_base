import BasePage from "./BasePage";

class SelectPage extends BasePage {
  static get url() {
    return "/selectable";
  }
    static get selectOne() {
        return cy.get(".mt-2").contains("Cras justo odio");
    }

    static get selectTwo() {
        return cy.get(".mt-2").contains("Dapibus ac facilisis in");
    }

    static get selectThree() {
        return cy.get(".mt-2").contains("Morbi leo risus");
    }

    static get selectFour() {
        return cy.get(".mt-2").contains("Porta ac consectetur ac");
    }
}
export default SelectPage;
