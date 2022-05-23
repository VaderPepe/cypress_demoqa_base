import BasePage from "./BasePage";

class SelectGridPage extends BasePage {
  static get url() {
    return "/selectable";
  }
  static get gridTab() {
    return cy.get("#demo-tab-grid");
  }
  static get gridContains(){
    return cy.get('#gridContainer');
  }
}

export default SelectGridPage;