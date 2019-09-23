/* eslint @typescript-eslint/no-var-requires: 0 */
const { assert } = require('chai');

Feature('Site Navigation');

const posts = '//div[contains(@class, "post__PostWrapper")]';
const postTitles = '//*[contains(@class, "post__PostTitle")]';
const tags = '//div[contains(@class, "tag-group")]//span';

Scenario('Open a blog posts page', async (I) => {
  await I.amOnPage('/');
  const title = await I.grabTextFrom(locate(postTitles).first());
  await I.click(locate(posts).first());
  await I.see(title, 'h1');
});

Scenario('Open blog listing page', async (I) => {
  await I.amOnPage('/');
  await I.click('Blog');
  await I.see('Newer Posts');
  await I.see('Older Posts');
  const numOfPosts = await I.grabNumberOfVisibleElements(posts);
  assert.equal(numOfPosts, 6);
});

Scenario('Open tag listing page from home page', async (I) => {
  await I.amOnPage('/');
  const tagName = await I.grabTextFrom(locate(tags).first());
  await I.click(locate(tags).first());
  await I.see(tagName, 'h1');
});

Scenario('Open tag listing page from blog posts page', async (I) => {
  await I.amOnPage('/');
  await I.click(locate(posts).first());
  const tagName = await I.grabTextFrom(locate(tags).first());
  await I.click(locate(tags).first());
  await I.see(tagName, 'h1');
});
