const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
let driver = await new Builder().forBrowser('chrome').build();
try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
} finally {
    await driver.quit();
}
//Nota: para al final deberemos colocar (); para que se inicie la ejecución




})();