const {Builder, By, Key, util} = require("selenium-webdriver");

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://tsjs.pl/testowanie");
    await driver.findElement(By.name("q")).sendKeys("testowanie", Key.RETURN);
}

example();