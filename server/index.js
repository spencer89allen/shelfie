var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive')

require('dotenv').config({ path: __dirname + '/.env'});
// ^ figure out what this line does

var cntrl = require('./controller')

var app = express();

massive( process.env.CONNECTION_STRING, { scripts: __dirname + '/db' } ).then( dbInstance => {
    app.set('db', dbInstance)
    // ^ still need to create our table
    console.log(`The database is connected`)
    // return dbInstance.setup.create_products_table()
}).catch(e => {
    console.error(e);
});

app.use(bodyParser.json());

//Endpoints 
app.get('/api/inventory', cntrl.getInventory)
app.post('/api/product', cntrl.createProduct)

var Port = process.env.PORT || 4545;

app.listen(Port, () => {
    console.log(`Your server is listening on Port: ${Port}`)
});