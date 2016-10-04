var express = require('express');

// Create app
var app = express();

app.use(express.static('public'));

//app.use(function(error, req, res, next) {
//    if (error.syscall !== 'listen') {
//        throw error;
//    }
//
//    var bind = typeof port === 'string'
//        ? 'Pipe ' + port
//        : 'Port ' + port;
//
//    // handle specific listen errors with friendly messages
//    switch (error.code) {
//        case 'EACCES':
//            console.error(bind + ' requires elevated privileges');
//            process.exit(1);
//            break;
//        case 'EADDRINUSE':
//            console.error(bind + ' is already in use');
//            process.exit(1);
//            break;
//        default:
//            throw error;
//    }
//});

app.listen(3000, function() {
    console.log('Express server is up on port 3000');
});