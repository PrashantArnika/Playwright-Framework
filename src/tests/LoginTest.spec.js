import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { decrypt, encrypt } from '../utils/CryptojsUtil';
import { encryptEnvFile, decryptEnvFile } from '../utils/EncryptEnvFile';
import { convertCsvFileToJsonFile } from '../utils/CsvtoJsonUtil';
import cdata from "../data/datademo.json";

test('login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  const homePage = await loginPage.login(decrypt(process.env.username), decrypt(process.env.password));
  //const homePage = await loginPage.login("kadusprashant-xdyv@force.com", "Arnabc#7633");
  const title = await homePage.getTitle();
  expect(title).toContain("Salesforce")
});

test('sample env test', async ({ page }) => {
  // console.log(process.env.NODE_ENV);
  // console.log(process.env.username);
  // console.log(process.env.password);
  // const plainText = "Hello Tom";
  // const encryptedText = encrypt(plainText);
  // console.log('SALT:', process.env.SALT);
  // console.log('Encrypted:', encryptedText);
  // const decryptedText = decrypt(encryptedText);
  // console.log('Decrypted:', decryptedText);
  // encryptEnvFile();
});

test('Sample DD test', async ({ page }) => {
  const input = "Henry";
  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  const homePage = await loginPage.login("kadusprashant-xdyv@force.com", "Arnabc#7633");
  await homePage.search(input);
});

for (const contact of cdata) {
  test.only(`Advance DD test for ${contact.firstName}`, async ({ page }) => {
    //const input = "Henry";
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const homePage = await loginPage.login("kadusprashant-xdyv@force.com", "Arnabc#7633");
    await homePage.search(contact.firstName);
  });
}

test('csv to json', async ({ page }) => {
  convertCsvFileToJsonFile("data.csv", "datademo.json")
});