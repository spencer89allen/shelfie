var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive')

require('dotenv').config({ path:__dirname + '/.env'});
// ^ figure out what this line does

var cntrl = require('./controller')

var app = express();

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
    // ^ still need to create our table
    console.log(`The database is connected`)
}).catch(e => {
    console.error(e);
});

app.use(bodyParser.json());

//Endpoints 


var Port = process.env.PORT || 4545;

app.listen(Port, () => {
    console.log(`Your server is listening on Port: ${Port}`)
});