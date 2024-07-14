import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { firstPassword, firstUsername } from "../helpers/constants";

test(`Get performance metrics for Login`, async ({ page }) => {
    const session = await page.context().newCDPSession(page);
    await session.send("Performance.enable");
    const loginPage = new LoginPage(page);
    await loginPage.navigate('./');
    await loginPage.performLogin(firstUsername, firstPassword);
    const homePage = new HomePage(page);
    expect(homePage.homeButton).toBeVisible();
    expect(homePage.contactButton).toBeVisible();
    console.log("=============CDP Performance Metrics===============")
    let performanceMetrics = await session.send("Performance.getMetrics");
    console.log(performanceMetrics.metrics);
});