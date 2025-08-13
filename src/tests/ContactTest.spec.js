import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('sample DD test', async ({ page }) => {
  const fname = "Samantha";
  const lname = "Clarke";
  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  const homePage = await loginPage.login("kadusprashant-xdyv@force.com", "Arnabc#7633");
  const contactPage = await homePage.clickContacts();
  contactPage.addNewContact(fname,lname);
});
