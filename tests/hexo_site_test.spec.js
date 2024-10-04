const {test, expect} = require('@playwright/test')

test('Test if Hexo site exists and is running', async({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Hexo')
})