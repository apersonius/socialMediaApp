const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0:27017//socialMediaApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports =  mongoose.connection;