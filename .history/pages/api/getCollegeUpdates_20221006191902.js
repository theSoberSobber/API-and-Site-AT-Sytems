var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://www.manit.ac.in/',
  'headers': {
  }
};
request(options, function (err, res) {
  if (err) throw new Error(err);
  console.log(res.body);
});