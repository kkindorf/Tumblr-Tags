var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var http = require('http');

var app = express();
app.use(bodyParser.json());
app.use(express.static('build'));
console.log(config.DATABASE_URL)
var runServer = function(callback){
    console.log(config.DATABASE_URL)
    mongoose.connect(config.DATABASE_URL, function(err){
        if(err && callback){
            return callback(err)
        }
        app.listen(config.PORT, function(){
            console.log('Listening on localhost: '+config.PORT);
            if(callback){
                callback();
            }
        })
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
var SaveCard = require("./model/saveCard");
app.get('/hello', function(req,res){
    return res.json({message: 'Hello world!'})
})
app.get('/saved-cards', function(req, res){
    SaveCard.find(function(err, savedCards){
        if(err){
            return res.json({
                message: 'There was a problem returning your cards'
            })
        }
        res.json(savedCards)
    })
})
app.post('/saved-cards', function(req, res){
    console.log(req.body.postedData)
    SaveCard.create({
        src: req.body.postedData.src,
        blogname: req.body.postedData.blogName,
        summary: req.body.postedData.summary,
        timeStamp: req.body.postedData.timeStamp
    }, function(err, saveCard){
        if(err){
            return res.status(500).json({
                message: err
            })
        }
        res.status(201).json({saveCard});
    });
});


//app.us here is catching all of th endpoints if none of the endpoints were hit on a request 
//made by the user
app.use('*', function(request, response){
    response.status(404).json({
        message: 'Not Found'
    });
});



