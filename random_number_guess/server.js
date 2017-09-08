var express = require('express');
var app = express();
var path = require('path');
var port = 5000;

 // middleware
app.use(express.static('public'));

app.listen(port, function() {
    console.log( 'listening on port', port);
})

//base url
app.get('/', function( req, res ){

    res.sendFile(path.join(__dirname, './public/views/index.html'));
    console.log('inside app.get');
})