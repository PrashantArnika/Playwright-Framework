import { HomePage } from "./HomePage";

class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.loginbtn = page.locator("#Login");
    }

    async goTo() {
        await this.page.goto("/");

    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password)
        await this.loginbtn.click();
        const homePage = new HomePage(this.page);
        return homePage;

    }
}

module.exports = {LoginPage}
