const {Builder, By, Key, until} = require('selenium-webdriver');

// beforeAll(async () => {
// })

    
test('Verificar texto', async() => {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://demo-store.seleniumacademy.com/');
    expect(await driver.findElement(By.xpath('//*[@id="nav"]/ol/li[2]/a')).getText() ).toEqual('MEN');
    await driver.quit();
});



