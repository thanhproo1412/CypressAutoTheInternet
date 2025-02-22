import HomeAction from '../../support/pages/HomePage/HomeAction';
import ABTestingAction from '../../support/pages/ABTestingPage/ABTestingAction';
import testData from '../../fixtures/testData/TC_001_ABTesting.json'; // Expected data
import expectedData from '../../fixtures/expectedData/Expected_TC_001_ABTesting.json'; // Expected data

describe('TC_001 - Verify A/B Testing Page', () => {

  it('Should navigate to A/B Testing page and verify content', () => {

    // Navigate to the home page
    cy.visit('https://the-internet.herokuapp.com/');

    // Click A/B Testing button
    HomeAction.clickABTestingBtn();

    // Verify A/B Testing Page URL
    ABTestingAction.verifyURL();

    // ✅ Chỉ cần gọi 1 hàm duy nhất để kiểm tra title & content
    ABTestingAction.verifyAndHandleContent(expectedData.title, expectedData.content);
  });

});
