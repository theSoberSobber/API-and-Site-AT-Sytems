const cheerio = require('cheerio');
const request = require('request');
export default function handler(requestHandler, responseHandler) {
  var options = {
    'method': 'GET',
    'url': 'http://www.manit.ac.in/',
  };
  
  request(options, function (err, res) {
    if (err) throw new Error(err);
    const $ = cheerio.load(res.body);
    var list = [];
    $('div[class="modal-body quick"]').find('div > p > a').each(function (index, element) {
      list.push($(element).attr('href'));
    });
    console.log(list);
    response.send(list);
  });
}