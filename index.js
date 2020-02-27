const { Builder } = require("selenium-webdriver");

const driver = new Builder()
  .forBrowser("firefox")
  .build();

async function openWebsites() {
    try {
        await (await driver).get("https://www.google.pl/");
        await (await driver).get("https://www.google.com/");   
    } catch (error) {
        console.log(error);
    }
}

openWebsites();