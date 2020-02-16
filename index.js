const {Builder, By, Key, util} = require("selenium-webdriver");

// async function example() {
//     let driver = await new Builder().forBrowser("chrome").build();
//     await driver.get("http://google.pl");
//     await driver.findElement(By.name("q")).sendKeys("tsjs.pl", Key.RETURN);
// }

// example();

const driver = new Builder().forBrowser("chrome").build();

driver.get("https://tsjs.pl");