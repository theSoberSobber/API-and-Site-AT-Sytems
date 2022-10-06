var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://www.manit.ac.in/',
};
request(options, function (err, res) {
  if (err) throw new Error(err);
  const body = res.body;
  const regex = 'http://www.manit.ac.in/sites/default/files/.*';
  console.log(body.match(modal-body quick));
});