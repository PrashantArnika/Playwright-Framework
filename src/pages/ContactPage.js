class ContactPage {
    constructor(page){
        this.page = page;
        this.newBtn = page.locator("a[title='New']");
        this.firstName = page.locator("[name='firstName']");
        this.lastName = page.locator("[name='lastName']");
        this.saveBtn = page.locator("[name='SaveEdit']");
    }

    async addNewContact(firstName,lastName){
        await this.page.locator("a[title='New']").waitFor({ state: 'visible', timeout: 20000 });
        await this.page.pause();
        await this.newBtn.click();
        await this.page.locator("//*[text()='New Contact']").waitFor({ state: 'visible', timeout: 20000 });
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.saveBtn.click();

    }


// Samantha Clarke
// Henry Dalton
// Emily Foster
// James Whitaker
// Grace Holloway

}

module.exports = {ContactPage}