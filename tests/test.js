//Playwright Tests for Agile Docs


test('Verify homepage link, title, and article heading', async ({ page }) => {
  // Go to the homepage
  await page.goto('https://dfianuale.github.io/hexo-IS373/');
