import {test, expect} from '@playwright/test';

test("Test for the title of the Containerization page", async({page}) => {
    await page.goto('');
    await expect(page).toHaveTitle("Containerization");
})

test("Test for page heading", async({page}) => {
    await page.goto('');
    await expect(page.getByRole("heading", {name: "Containerization"})).toBeVisible();
})

test("Test for a URL to reach the page", async({page}) => {
    await page.goto('');
    const Ltext = "";
    const link = page.locator(`text=${Ltext}`)
    await expect(link).toBeVisible();

})