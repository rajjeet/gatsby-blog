Feature('Mobile Table of Contents Modal');

const mobileTableOfContents = '//div[@data-testid="mobile-toc"]';
const openTableOfContentsButton = '//button[@aria-label="Open table of contents"]';
const closeOpenTableOfContentsButton = '//button[@aria-label="Close table of contents"]';

Before((I) => {
  I.resizeWindow(250, 600);
  I.amOnPage('/one-hour-landing-pages/');
});

Scenario('Opening and closing the modal', (I) => {
  I.dontSeeElement(mobileTableOfContents);
  I.click(openTableOfContentsButton);
  I.seeElement(mobileTableOfContents);
  I.click(closeOpenTableOfContentsButton);
  I.dontSeeElement(mobileTableOfContents);
});

Scenario('Opening modal and navigating to a section', (I) => {
  I.dontSeeElement(mobileTableOfContents);
  I.click(openTableOfContentsButton);
  I.click('Current Solution', mobileTableOfContents);
  I.seeInCurrentUrl('/#current-solution');
  I.dontSeeElement(mobileTableOfContents);
});

