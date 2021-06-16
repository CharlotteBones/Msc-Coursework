const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// setting up connection to mongo

mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://user:aN4BsuQtCVu9Z-R@notuber.8mdfv.mongodb.net/NotUber?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

mongoose.connection.once('open', () => {
    console.log('Connection to mongoDB successful');
}).on('error', (error) => {
    console.log('Connection failed', error);
});

// using seperate file to handle routing
const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(process.env.port || 8080, () => {
    console.log('listening for requests...');
});
