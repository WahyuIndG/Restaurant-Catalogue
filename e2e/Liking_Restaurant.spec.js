const assert = require('assert');

Feature('Liking_Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one Restaurant then unliking it', async ({ I }) => {
  I.seeElement('.empty-sauce');
  I.see('No favorite restaurant yet');

  I.amOnPage('/');
  I.waitForElement('.post h3', 3);
  I.seeElement('.post h3');
  const firstPost = locate('.post h3').first();
  const firstPostTitle = await I.grabTextFrom(firstPost);
  I.click('.post');

  // halman detail.js
  I.waitForElement('h1', 3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // halaman favorite.js
  I.amOnPage('/#/favorite');
  I.waitForElement('.post h3', 3);
  I.seeElement('.post h3');
  const likedPostTitle = await I.grabTextFrom('.post h3');
  assert.strictEqual(firstPostTitle, likedPostTitle);
  I.click('.post');

  // halaman detail.js
  I.waitForElement('h1', 3);
  I.seeElement('#likedButton');
  I.click('#likedButton');

  // halaman favorite.js
  I.amOnPage('/#/favorite');
  I.seeElement('.empty-sauce');
  I.see('No favorite restaurant yet');
});
