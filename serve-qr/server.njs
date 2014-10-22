var qr = require('qr-image');  
var express = require('express');

var app = express();

app.get('/', function(req, res) {  
	var strText = req.param("text");
	if (strText == null)
	{
		strText = "http://dor.ky";	
	} 

	var code = qr.image(strText, { 
		type: 'png',
		size: 30
	});
	res.type('png');	
	code.pipe(res);
});

app.listen(3000);  