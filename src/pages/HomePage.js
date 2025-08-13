const { ContactPage } = require("./ContactPage");

class HomePage {

    constructor(page) {
        this.page = page;
        this.contactsBtn = page.locator("[src*='EasyContacts']");
        this.searchBtn = page.locator("[aria-label='Search']");
        this.searchTextBox = page.locator("[placeholder='Search...']")
    }

    async getTitle() {
        await this.page.waitForSelector('xpath=//span[text()="Sales"]', { state: 'visible' });
        const title = await this.page.title();
        return title;
    }

    async search(input){
        await this.searchBtn.click(); 
        await this.searchTextBox.fill(input);
    }
    
    async clickContacts() {
        await this.contactsBtn.click();
        await this.page.waitForSelector('xpath=//button[text()="Add a Contact"]', { state: 'visible' });
        const contactPage = new ContactPage(this.page);
        return contactPage;
    }
}

module.exports = {HomePage}
