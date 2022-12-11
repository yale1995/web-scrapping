const puppeteer = require("puppeteer");
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("http://abcfc.com.br");

  const newsAbc = await page.evaluate(() => {
    const nodeList = document.querySelectorAll("article a");

    const newsArray = [...nodeList];

    const list = newsArray.map((item) => ({ href: item.href }));
    return list;
  });

  console.log(newsAbc);

  fs.writeFile('abc.json', JSON.stringify(newsAbc, null, 2), err => {
    if(err) throw new Error('something went wrong')

    console.log('well done')
  })

  await browser.close();
})();
