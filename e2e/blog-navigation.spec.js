/* eslint @typescript-eslint/no-var-requires: 0 */

Feature('Blog Navigation');

const adjacentPostLink = '//a[contains(@class, "adjacent-post")]';

Scenario('Go to previous blog article', async (I) => {
  await I.amOnPage('/abstracting-kitchen-quoter/');
  await I.retry(3).click(locate(adjacentPostLink).first());
  await I.seeInCurrentUrl('/quoting-kitchen-with-style/');
});

Scenario('Go to next blog article', async (I) => {
  await I.amOnPage('/abstracting-kitchen-quoter/');
  await I.retry(3).click(locate(adjacentPostLink).last());
  await I.seeInCurrentUrl('/calculator-works/');
});
