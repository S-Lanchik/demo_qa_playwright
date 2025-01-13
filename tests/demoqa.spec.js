import { test, expect } from "@playwright/test";
    
    test.describe('check demoqa functionality', () => {
        test.beforeEach(async ({page}) => {
            await page.goto('https://demoqa.com/');
        }); 

        test('verify page title', async ({page}) => {
            let title = await page.title();
    
            expect(title).toEqual('DEMOQA');
        });

        test('verify sidemenu items', async ({page}) => {
            await page.locator('.card:first-child').click();

            await expect(page.locator('.element-list')).toHaveCount(6);
        });

        test('verify Radio button page title', async ({page}) => {
            await page.locator('.card:first-child').click();
            await page.locator('span:text-is("Radio Button")').click();
    
            await expect(page.locator('.text-center')).toHaveText('Radio Button');
        });

        test('verify Yes radio button is clicked', async ({page}) => {
            await page.locator('.card:first-child').click();
            await page.locator('span:text-is("Radio Button")').click();
            await page.getByText('Yes').click();

            await expect(page.locator('.mt-3')).toContainText('You have selected Yes');
        });

        test('verify ability to check a checkbox', async ({page}) => {
            await page.locator('.card:first-child').click();
            await page.locator('span:text-is("Check Box")').click();
            await page.locator('.rct-checkbox').check();

            expect(page.locator('.rct-checkbox')).toBeChecked();
        });

        test('verify ability to add info to the table', async ({page}) => {
            await page.locator('.card:first-child').click();
            await page.locator('span:text-is("Web Tables")').click();
            await page.getByRole('button', {name: 'Add'}).click();

            await page.getByPlaceholder('First Name').fill('Tom');
            await page.getByPlaceholder('Last Name').fill('Cruise');
            await page.getByPlaceholder('name@example.com').fill('tom@gmail.com');
            await page.getByPlaceholder('Age').fill('62');
            await page.getByPlaceholder('Salary').fill('10500');
            await page.getByPlaceholder('Department').fill('IT');
            await page.getByRole('button', {name: 'Submit'}).click()

            await expect(page.locator('.rt-tbody')).toContainText('TomCruise62tom@gmail.com10500IT');
        });

        test('verify modal window is opened', async ({page}) => {
            await page.locator('.card:nth-child(3)').click();
            await page.locator('span:text-is("Modal Dialogs")').click();
            await page.getByRole('button', {name: 'Small modal'}).click();
            
            await expect(page.locator('.modal-content')).toBeVisible();
        });

        test('verify picking date', async ({page}) => {
            await page.locator('.card:nth-child(4)').click();
            await page.locator('span:text-is("Date Picker")').click();
            await page.locator('#datePickerMonthYearInput').click();
            await page.locator('.react-datepicker__day--015').click();

            await expect(page.locator('#datePickerMonthYearInput')).toHaveValue('01/15/2025');
        });

        test('verify ability to login', async ({page}) => {
            await page.locator('.card:last-child').click();
            await page.locator('span:text-is("Login")').click();
            await page.getByPlaceholder('UserName').fill('TomCruise');
            await page.getByPlaceholder('Password').fill('Tom12345$');
            await page.getByRole('button', {name: 'Login'}).click();

            await expect(page).toHaveURL('https://demoqa.com/profile');
            await page.getByLabel('TomCruise').isVisible();
        });

    });