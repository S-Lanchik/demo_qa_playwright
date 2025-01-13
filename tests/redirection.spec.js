import { test, expect } from "@playwright/test";
    
    test.describe('check redirection', () => {
        test.beforeEach(async ({page}) => {
            await page.goto('https://demoqa.com/');
        }); 

        test('verify redirection to Elements page', async ({page}) => {
            await page.locator('.card:first-child').click();
    
            await expect(page).toHaveURL('https://demoqa.com/elements');
        });

        test('verify redirection to Forms page', async ({page}) => {
            await page.locator('.card:nth-child(2)').click();
    
            await expect(page).toHaveURL('https://demoqa.com/forms');
        });

        test('verify redirection to Alerts page', async ({page}) => {
            await page.locator('.card:nth-child(3)').click();
    
            await expect(page).toHaveURL('https://demoqa.com/alertsWindows');
        });

        test('verify redirection to Widgets page', async ({page}) => {
            await page.locator('.card:nth-child(4)').click();
    
            await expect(page).toHaveURL('https://demoqa.com/widgets');
        });

        test('verify redirection to Interaction page', async ({page}) => {
            await page.locator('.card:nth-child(5)').click();
    
            await expect(page).toHaveURL('https://demoqa.com/interaction');
        });

        test('verify redirection to Books page', async ({page}) => {
            await page.locator('.card:last-child').click();
    
            await expect(page).toHaveURL('https://demoqa.com/books');
        });

    });    
