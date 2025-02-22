import HomeAction from '../../support/pages/HomePage/HomeAction';
import ABTestingAction from '../../support/pages/ABTestingPage/ABTestingAction';
import testData from '../../fixtures/testData/TC_001_ABTesting.json'; // ✅ Corrected Import

describe('TC_001 - Verify A/B Testing Page', () => {

  it('Should navigate to A/B Testing page and verify content', () => {

    // Navigate to the home page
    cy.visit('https://the-internet.herokuapp.com/');

    // Click A/B Testing button
    HomeAction.clickABTestingBtn();

    // Verify A/B Testing Page URL
    ABTestingAction.verifyURL();

    // Verify A/B Testing Page Title
    ABTestingAction.verifyTitle(testData.title);

    // Verify A/B Testing Page Content
    ABTestingAction.verifyContent(testData.content);

  });

});
