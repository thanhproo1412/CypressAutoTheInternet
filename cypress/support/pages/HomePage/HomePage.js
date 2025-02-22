export default class HomePage {

  // A/B Testing button
  get abTestingBtn() {
    return cy.get('div#content a:contains("A/B Testing")');
  }

  // Add/Remove Elements button
  get addRemoveElementsBtn() {
    return cy.get('div#content a:contains("Add/Remove Elements")');
  }

  // Basic Auth 
  get basicAuth() {
    return cy.get('div#content a:contains("Basic Auth")');
  }

  // Broken Images button
  get brokenImagesBtn() {
    return cy.get('div#content a:contains("Broken Images")');
  }

  // Challenging DOM button
  get challengingDOMBtn() {
    return cy.get('div#content a:contains("Challenging DOM")');
  }

  // Checkboxes button
  get checkboxesBtn() {
    return cy.get('div#content a:contains("Checkboxes")');
  }

  // Context Menu button
  get contextMenuBtn() {
    return cy.get('div#content a:contains("Context Menu")');
  }

  // Digest Authentication
  get digestAuth() {
    return cy.get('div#content a:contains("Digest Authentication")');
  }

  // Disappearing Elements button
  get disappearingElementsBtn() {
    return cy.get('div#content a:contains("Disappearing Elements")');
  }

  // Drag and Drop button
  get dragAndDropBtn() {
    return cy.get('div#content a:contains("Drag and Drop")');
  }

  // Dropdown button
  get dropdownBtn() {
    return cy.get('div#content a:contains("Dropdown")');
  }

  // Dynamic Content button
  get dynamicContentBtn() {
    return cy.get('div#content a:contains("Dynamic Content")');
  }

  // Dynamic Controls button
  get dynamicControlsBtn() {
    return cy.get('div#content a:contains("Dynamic Controls")');
  }

  // Dynamic Loading button
  get dynamicLoadingBtn() {
    return cy.get('div#content a:contains("Dynamic Loading")');
  }

  // Entry Ad button
  get entryAdBtn() {
    return cy.get('div#content a:contains("Entry Ad")');
  }

  // Exit Intent button
  get exitIntentBtn() {
    return cy.get('div#content a:contains("Exit Intent")');
  }

  // File Download button
  get fileDownloadBtn() {
    return cy.get('div#content a:contains("File Download")');
  }

  // File Upload button
  get fileUploadBtn() {
    return cy.get('div#content a:contains("File Upload")');
  }

  // Floating Menu button
  get floatingMenuBtn() {
    return cy.get('div#content a:contains("Floating Menu")');
  }

  // Forgot Password button
  get forgotPasswordBtn() {
    return cy.get('div#content a:contains("Forgot Password")');
  }

  // Form Authentication button
  get formAuthenticationBtn() {
    return cy.get('div#content a:contains("Form Authentication")');
  }

  // Frames button
  get framesBtn() {
    return cy.get('div#content a:contains("Frames")');
  }

  // Geolocation button
  get geolocationBtn() {
    return cy.get('div#content a:contains("Geolocation")');
  }

  // Horizontal Slider button
  get horizontalSliderBtn() {
    return cy.get('div#content a:contains("Horizontal Slider")');
  }

  // Hovers button
  get hoversBtn() {
    return cy.get('div#content a:contains("Hovers")');
  }

  // Infinite Scroll button
  get infiniteScrollBtn() {
    return cy.get('div#content a:contains("Infinite Scroll")');
  }

  // Inputs button
  get inputsBtn() {
    return cy.get('div#content a:contains("Inputs")');
  }

  // JQuery UI Menus button
  get jQueryUIMenusBtn() {
    return cy.get('div#content a:contains("JQuery UI Menus")');
  }

  // JavaScript Alerts button
  get javaScriptAlertsBtn() {
    return cy.get('div#content a:contains("JavaScript Alerts")');
  }

  // JavaScript Onload Event Error button
  get javaScriptOnloadEventErrorBtn() {
    return cy.get('div#content a:contains("JavaScript onload event error")');
  }

  // Key Presses button
  get keyPressesBtn() {
    return cy.get('div#content a:contains("Key Presses")');
  }

  // Large & Deep DOM button
  get largeDeepDOMBtn() {
    return cy.get('div#content a:contains("Large & Deep DOM")');
  }

  // Multiple Windows button
  get multipleWindowsBtn() {
    return cy.get('div#content a:contains("Multiple Windows")');
  }

  // Nested Frames button
  get nestedFramesBtn() {
    return cy.get('div#content a:contains("Nested Frames")');
  }

  // Notification Messages button
  get notificationMessagesBtn() {
    return cy.get('div#content a:contains("Notification Messages")');
  }

  // Redirect Link button
  get redirectLinkBtn() {
    return cy.get('div#content a:contains("Redirect Link")');
  }

  // Secure File Download button
  get secureFileDownloadBtn() {
    return cy.get('div#content a:contains("Secure File Download")');
  }

  // Shadow DOM button
  get shadowDOMBtn() {
    return cy.get('div#content a:contains("Shadow DOM")');
  }

  // Shifting Content button
  get shiftingContentBtn() {
    return cy.get('div#content a:contains("Shifting Content")');
  }

  // Slow Resources button
  get slowResourcesBtn() {
    return cy.get('div#content a:contains("Slow Resources")');
  }

  // Sortable Data Tables button
  get sortableDataTablesBtn() {
    return cy.get('div#content a:contains("Sortable Data Tables")');
  }

  // Status Codes button
  get statusCodesBtn() {
    return cy.get('div#content a:contains("Status Codes")');
  }

  // Typos button
  get typosBtn() {
    return cy.get('div#content a:contains("Typos")');
  }

  // WYSIWYG Editor button
  get wysiwygEditorBtn() {
    return cy.get('div#content a:contains("WYSIWYG Editor")');
  }
}
