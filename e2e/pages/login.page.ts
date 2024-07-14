import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {

    private emailTextField: Locator;
    private passwordTextField: Locator;
    private submitLoginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.emailTextField = page.locator("#email");
        this.passwordTextField = page.locator('#password');
        this.submitLoginButton = page.locator('.btn-login');
    }

    async performLogin(username: string, password: string) {
        await this.emailTextField.fill(username);
        await this.passwordTextField.fill(password);
        await this.submitLoginButton.click();
    }
}
