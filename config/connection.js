const { connect, connection } = require('mongoose');

const connectionString = 
    process.env.MONGODB_URI || 'mongodg://localhost:27017';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;