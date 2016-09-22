var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');


var app = express();
app.use(bodyParser.json());
app.use(express.static('build'));
var runServer = function(callback){
    app.listen(config.PORT, function(){
            console.log('Listening on localhost: '+config.PORT);
            if(callback){
                callback();
            }
        })
    
}


if(require.main === module){
    runServer(function(err){
        if(err){
            console.log(err)
        }
    })
}
exports.app = app;
exports.runServer = runServer;
