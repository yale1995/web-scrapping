const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("http://yalearaujo.com.br/portfolio");

  await page.screenshot({ path: "yale.png" });
  await browser.close();
})();
