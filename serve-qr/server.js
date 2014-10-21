var qr = require('qr-image');  
var express = require('express');

var app = express();

app.get('/', function(req, res) {  
  var code = qr.image("http://dor.ky", { type: 'svg' });
  res.type('svg');
  code.pipe(res);
});

app.listen(3000);  