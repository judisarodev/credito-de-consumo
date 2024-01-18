import puppeteer from 'puppeteer';

const getUsuryRate = async () => {
    const browser = await puppeteer.launch({ headless: 'false' });
    const page = await browser.newPage();
    await page.goto('https://www.larepublica.co/indicadores-economicos/bancos/tasa-de-usura/');
    
    const rate = await page.evaluate(() => {
        return document.querySelector('.price').textContent
    });
    
    await browser.close();
    
    return parseInt(rate);
}

export { getUsuryRate }; 