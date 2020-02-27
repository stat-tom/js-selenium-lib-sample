const {Builder, By, Key, util} = require("selenium-webdriver");

const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();

options.setProfile("./SeleniumTutorial");

// options.setPreference("browser.download.dir", "C:\\mySeleniumDownloads");
// options.setPreference("browser.download.folderList", 2);
// options.setPreference("browser.helperApps.neverAsk.saveToDisk", "applications/x-csv");


// async function example() {
//     let driver = await new Builder().forBrowser("chrome").build();
//     await driver.get("http://google.pl");
//     await driver.findElement(By.name("q")).sendKeys("tsjs.pl", Key.RETURN);
// }

// example();

const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

driver.get("http://google.com");