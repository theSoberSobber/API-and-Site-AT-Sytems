var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://www.manit.ac.in/',
};
request(options, function (err, res) {
  if (err) throw new Error(err);
  const body = res.body;
  var parser = new DOMParser();
  var htmlDoc = parser.parseFromString(body, 'text/html');
  console.log(htmlDoc);

});