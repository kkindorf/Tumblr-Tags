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
    /*mongoose.connect(config.DATABASE_URL, function(err){
        if(err && callback){
            return callback(err)
        }
        
    })*/
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
/*var SaveCard = require("./model/saveCard");

app.get("/search", function(req, res){
   var query = Object.keys(req.query);
   console.log(query);
   var url = "http://api.tumblr.com/v2/tagged?tag="+query[0]+"&limit=300&api_key=F2iyRm0Ffc73oZncziOzs4SRvswAbAMQG4VS2ErSAHEtSB3JRz";
   http.get(url, function(resp){
       //console.log(res);
       resp.pipe(res);
   })
});
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
        blogName: req.body.postedData.blogName,
        postUrl: req.body.postedData.postUrl,
        summary: req.body.postedData.summary
    }, function(err, saveCard){
        if(err){
            return res.status(500).json({
                message: err
            })
        }
        res.status(201).json({saveCard});
    });
});

app.delete('/saved-cards/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    SaveCard.findByIdAndRemove(id, function(error){
        if(error){
            return res.status(400).json({
                message: 'You did not select a valid id'
            })
        }
        res.status(200).json(id)
    })
})

//app.us here is catching all of th endpoints if none of the endpoints were hit on a request 
//made by the user
app.use('*', function(request, response){
    response.status(404).json({
        message: 'Endpoint Not Found'
    });
});*/