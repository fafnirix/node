/*eslint-env node*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {

  res.send('Cau svet, som tu a nebojim sa!');

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
