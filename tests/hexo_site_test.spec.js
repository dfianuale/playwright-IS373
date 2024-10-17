const {test, expect} = require('@playwright/test')

test('Test if Hexo site exists and is running', async({page}) => {

    await page.goto('http://127.0.0.1:4000/')
    await expect(page).toHaveTitle('Hexo')
})