import { BasePage } from "./base.page";
import { Page, Locator } from "@playwright/test";



export class HomePage extends BasePage {

    homeButton: Locator;
    private profileButton: Locator;
    productsButton: Locator;
    contactButton: Locator;
    private signOutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.homeButton = page.locator(".home");
        this.contactButton = page.locator(".contact");
        this.productsButton = page.locator(".products");
        this.profileButton = page.locator("#user");
        this.signOutButton = page.locator("#logout");
    }

    async performLogout() {
        await this.profileButton.click();
        await this.signOutButton.click();
    }

}