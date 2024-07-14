import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { users } from "../helpers/constants";

users.forEach(({ username, password }) => {
    test(`Perform Login as ${username}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate('./');
        await loginPage.performLogin(username, password);
        const homePage = new HomePage(page);
        expect(homePage.homeButton).toBeVisible();
        expect(homePage.contactButton).toBeVisible();
    })
})