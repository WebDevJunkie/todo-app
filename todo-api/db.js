const mongoose = require('mongoose');
const dbConnectionString = 'mongodb://localhost:27017/todo';

const connectDb = () => {
    mongoose.connect(dbConnectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, () => {
        console.log('mongodb is connected...');
    });
}

module.exports = connectDb;
