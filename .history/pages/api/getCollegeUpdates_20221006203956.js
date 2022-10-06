var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://www.manit.ac.in/',
};
var body;
request(options, function (err, res) {
  if (err) throw new Error(err);
  body = res.body;
});

// implement using this, this has a DOM parser
// https://stackoverflow.com/questions/32655076/cheerio-jquery-selectors-how-to-get-a-list-of-elements-in-nested-divs

const cheerio = require('cheerio');
const $ = cherrio.load(body);
var list = [];
$('div[class="modal-body quick"]').find('div > p > a').each(function (index, element) {
  list.push($(element).attr('href'));
});
console.dir(list);