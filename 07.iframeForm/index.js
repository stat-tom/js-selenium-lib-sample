const { Builder, By, Key } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

async function iframeForm() {
  try {
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
    await driver.switchTo().frame(0);
    await driver.findElement(By.xpath("//input[@aria-label='Name']")).sendKeys("Gimli");
    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN)).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB)).perform();
    await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
    await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
    await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
    await driver.actions().sendKeys(Key.chord(Key.SPACE)).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "02")).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "29")).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "2000")).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "Balin, Dwalin, Kili, Fili...")).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
  } catch (error) {
    console.log(error);
  }
}

iframeForm();
