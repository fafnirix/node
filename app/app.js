/*eslint-env node*/
/*
var express = require('express');
var app = express();

app.get('/', function (req, res) {

  res.send('Cau svet, som tu a nebojim sa!');

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

*/

/*
var fs = require("fs");
var data = fs.readFileSync('app/input.txt');

console.log(data.toString());
console.log("Program Ended");
*/

var fs = require("fs");

fs.readFile('app/input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");