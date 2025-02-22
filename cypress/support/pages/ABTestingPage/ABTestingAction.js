import ABTestingPage from './ABTestingPage.js';

const aBTestingPage = new ABTestingPage();

export default class ABTestingAction {

    // Verify Page Title
    static verifyTitle(expectedData) {
        aBTestingPage.getTitle.should('be.visible')
            .invoke('text')
            .then(text => expect(text.trim()).to.equal(expectedData));
    }

    // Verify Page Content
    static verifyContent(expectedData) {
        aBTestingPage.getContent.should('be.visible')
            .invoke('text')
            .then(text => expect(text.trim()).to.equal(expectedData));
    }

    // Verify URL
    static verifyURL() {
        cy.url().should('include', '/abtest');
    }
}
