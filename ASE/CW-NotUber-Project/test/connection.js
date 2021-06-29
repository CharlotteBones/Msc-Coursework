// I left my test files in here, I used mocha to work out the requests

const mongoose = require('mongoose');

mongoose.Promise = global.Promise

before(function(done) {

    mongoose.connect('mongodb+srv://user:aN4BsuQtCVu9Z-R@notuber.8mdfv.mongodb.net/NotUber?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.once('open', () => {
        console.log('Connection to mongoDB successful');
        done();
    }).on('error', (error) => {
        console.log('Connection failed', error);
    });
});
