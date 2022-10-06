var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://www.manit.ac.in/',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});