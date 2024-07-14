import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { firstPassword, firstUsername } from "../helpers/constants";
import { checkA11y, injectAxe } from "axe-playwright";

var loginPage: LoginPage;
var homePage: HomePage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate('./');
    await injectAxe(page);
    expect(loginPage.emailTextField).toBeVisible();
});

test(`Check Login Screen Accessibility Violations`, async ({ page }) => {
    const results = await checkA11y(page, undefined, {
        detailedReport: true,
        detailedReportOptions: { html: true }
    })
    console.log(results);
});

test(`Check Home Screen Accessibility Violations`, async ({ page }) => {
    await loginPage.performLogin(firstUsername, firstPassword);
    const homePage = new HomePage(page);
    expect(homePage.homeButton).toBeVisible();
    const results = await checkA11y(page, undefined, {
        detailedReport: true,
        detailedReportOptions: { html: true }
    })
    console.log(results);
});

test.afterEach(async ({ page }) => {
    await page.close()
})