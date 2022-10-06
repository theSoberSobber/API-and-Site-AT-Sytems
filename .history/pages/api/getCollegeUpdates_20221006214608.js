const cheerio = require('cheerio');
const request = require('request');
export default function handler(requestHandler, responseHandler) {
  var options = {
    'method': 'GET',
    'url': 'http://www.manit.ac.in/',
  };
  
  request(options, function (a, b) {
    if (a) throw new Error(a);
    const $ = cheerio.load(b.body);
    var list = [];
    $('div[class="modal-body quick"]').find('div > p > a').each(function (index, element) {
      list.push($(element).attr('href'));
    });
    console.log(list);
    responseHandler.send(list);
  });
}