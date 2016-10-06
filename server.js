var express = require('express');

// Create app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    if(req.headers['x-forwarded-proto'] === 'https') {
        // open weather api only returns over http, so redirect https requests
        res.redirect('http://' + req.hostname + req.url);

    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});

//var express = require('express');
//
//// Create app
//var app = express();
//
//app.use(express.static('public'));
//
//app.listen(3000, function() {
//    console.log('Express server is up on port 3000');
//});