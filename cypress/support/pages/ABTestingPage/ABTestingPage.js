export default class ABTestingPage {

  get getTitle() { 
    return cy.get('div#content h3'); // ✅ Now it's a getter
  }

  get getContent() { 
    return cy.get('div#content p'); // ✅ Also a getter
  }

}
