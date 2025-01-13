import { test, expect } from "@playwright/test";
    
    test.describe('check drag and drop functionality', () => {
        test.beforeEach(async ({page}) => {
            await page.goto('https://demoqa.com/');
        }); 

        test('droppable', async ({page}) => {
            await page.getByRole('heading', {name: 'Interactions'}).click();
            await page.locator('ul.menu-list>li>span:text-is("Droppable")').click();
            await page.locator('#draggable').dragTo(page.locator('#simpleDropContainer #droppable'));

            await expect(page.locator('#simpleDropContainer #droppable')).toContainText('Dropped!');
        });

        test('draggable', async ({page}) => {
            await page.getByRole('heading', {name: 'Interactions'}).click();
            await page.locator('ul.menu-list>li>span:text-is("Dragabble")').click();
            await expect(page.locator('.nav-tabs')).not.toContainText('Drag me');
            await page.locator('#dragBox').dragTo(page.locator('.nav-tabs'));

            await expect(page.locator('#draggableExample-tabpane-simple')).toContainText('Drag me');
        });
    
    });