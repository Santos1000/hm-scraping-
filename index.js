const fetch = require("node-fetch");

const options = {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://www2.hm.com/pt_pt/homem/comprar-por-produto/calcas.html?sort=stock&colorWithNames=preto_000000&image-size=small&image=model&offset=0&page-size=36",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
};


async function main() {
  let totalItems = 200;
  for(let startOffset = 20; startOffset < totalItems; startOffset += 20) {
    const response = await fetch(
    //the json in the becouse is diferent and the fecth is not working cerectelly
    `https://www2.hm.com/pt_pt/homem/comprar-por-produto/calcas/_jcr_content/main/productlisting.display.json?sort=stock&colorWithNames=preto_000000&image-size=small&image=model&offset=${startOffset}&page-size=36`,
    options
    );
    const json = await response.json();
    // totalItems = jason.data.refine.base.totalNum;
    // console.log(json.data.items);
    // await sleep(5000);
  }
}

// async function sleep(miliseconds) {
//   return new Promise(resolve => setTimeout(resolve, miliseconds));
// }

main();
