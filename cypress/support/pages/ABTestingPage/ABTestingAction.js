export default class ABTestingAction {
  
    static verifyURL() {
      cy.url().should('include', '/abtest');
    }
  
    static verifyTitle(expectedTitle) {
      cy.get('h3').should('have.text', expectedTitle);
    }
  
    // ✅ Hàm duy nhất để verify content & ghi file nếu sai
    static verifyAndHandleContent(expectedTitle, expectedContent, filePath = 'cypress/fixtures/actualData/TC_001_ABTesting.json') {
      cy.get('h3').should('have.text', expectedTitle);
      
      cy.get('.example p').invoke('text').then((actualContent) => {
        const trimmedActualContent = actualContent.trim(); // ✅ Trim dữ liệu thực tế
        const trimmedExpectedContent = expectedContent.trim(); // ✅ Trim dữ liệu mong đợi
        
        cy.wrap(trimmedActualContent).should('eq', trimmedExpectedContent).then((isMatch) => {
          if (!isMatch) {
            cy.log('❌ Content mismatch! Saving actual data...');
            
            cy.writeFile(filePath, {
              title: expectedTitle, 
              content: trimmedActualContent // ✅ Ghi file với nội dung đã trim
            });
  
            throw new Error(`Expected content: "${trimmedExpectedContent}", but found: "${trimmedActualContent}"`);
          }
        });
      });
    }
  }
  