const {test, expect} = require('@playwright/test')

test('Test if Hexo site exists and is running', async({page}) => {

    await page.goto('https://localhost:4000/')
    await expect(page).toHaveTitle('Index')
})