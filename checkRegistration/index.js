const { Builder, By } = require("./node_modules/selenium-webdriver");

const driver = new Builder()
  .forBrowser("firefox")
  .build();

async function checkRegistration() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.name("email")).sendKeys("secretmail@gmail.com");   
        await driver.findElement(By.id("password")).sendKeys("12345");   
        await driver.findElement(By.name("submit")).click();   
    } catch (error) {
        console.log(error);
    }
}

checkRegistration();