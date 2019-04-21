var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mihir:mihir@cluster0-lystu.mongodb.net/RoomBooking?retryWrites=true";
var mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true }).then(
    () => {
        console.log('connected to db');
    },
    (err) => {
        throw err;
    }
);
module.exports = mongoose.connection;