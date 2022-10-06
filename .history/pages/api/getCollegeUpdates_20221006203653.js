var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://www.manit.ac.in/',
};
request(options, function (err, res) {
  if (err) throw new Error(err);
  const body = res.body;
//   const regex = 'http://www.manit.ac.in/sites/default/files/.*';
  console.log(body[body.search('modal-body quick')]);
});

// implement using this, this has a DOM parser
// https://stackoverflow.com/questions/32655076/cheerio-jquery-selectors-how-to-get-a-list-of-elements-in-nested-divs


var list = [];
$('div[class="modal-body quick"]').find('div > div > a').each(function (index, element) {
  list.push($(element).attr('href'));
});
console.dir(list);
