const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const moedaInteresse = readlineSync.question("Informe uma moeda base ") || "real";
  const moedaBase = readlineSync.question("Informe uma moeda de interesse ") || "dolar";

  const url = `https://www.google.com/search?q=${moedaInteresse}+to+${moedaBase}&sxsrf=ALiCzsZDh88fqdkARWJofbsGTr74O1wHMw%3A1670762073973&ei=Wc6VY9P7OvLI1sQP4KSR4Ao&ved=0ahUKEwiTjLHfyfH7AhVypJUCHWBSBKwQ4dUDCA8&uact=5&oq=${moedaInteresse}+to+${moedaInteresse}&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCAAQgAQQRhCCAjIFCAAQgAQyCggAEIAEELEDEAoyCggAEIAEEAoQywEyCAgAEIAEEMsBMgoIABCABBAKEMsBMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKOgQIIxAnOgsIABCABBCxAxCDAToICAAQgAQQsQM6EQguEIAEELEDEIMBEMcBENEDOg4ILhCABBCxAxDHARDRAzoHCAAQsQMQQzoHCC4Q1AIQQzoQCC4QsQMQgwEQxwEQ0QMQQzoKCC4QxwEQ0QMQQzoECAAQQzoMCAAQsQMQQxBGEIICOg0IABCABBCxAxBGEIICOgsILhCABBDHARDRA0oECEEYAEoECEYYAFAAWJkOYOQPaABwAXgAgAGfAYgBrA-SAQQwLjEzmAEAoAEBwAEB&sclient=gws-wiz-serp`;

  await page.goto(url);

  const resultado = await page.evaluate(() => {
    return document.querySelector(".lWzCpb.a61j6").value;
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaInteresse} é ${resultado}`);

  await browser.close();
})();
