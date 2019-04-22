const User = require('../models/user.model');
var mongo = require('mongodb');
var conn = require('../dbConn');



function getNextSequenceValue(db, name) {
    db.collection("counters").findOneAndUpdate({ _id: name }, {}, { $inc: { seq: 1 } }, function(err, result){
        // if(err) callback(err, result);
        // callback(err, result.value.seq);
        console.log(err);
        console.log(result);

        if(err) {

        } else {
            return result.seq;
        }
    } );
}

exports.makeRequest = (req, res) => {

    console.log(req.body);
    // var oid = new mongo.ObjectID("5cbcfbe9831d5e09686cab70")
    var obj = {
        // _id: oid
        email: req.body.email,
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        room: req.body.room,
        reason: req.body.reason,
        verification_level: 0,
        branch: req.body.branch,
        reasonForRejection: "",
        requestTime: new Date()
    };
    conn.collection("request").insert(obj, function(err, result) {
        if(err) {

        } else {
            res.send(obj);
        }
    })  
    // const abc = await getNextSequenceValue(conn, "productid");
    // console.log(abc);
    // res.json(abc)
}



exports.getAllUserRequests = (req, res) => {
    console.log(req.body);
    const obj = {
        email: req.body.email
        // verificationLevel: '0'
    }
    conn.collection('request').find(obj).toArray(function (err, document) {
        if (err) {

        } else {
            console.log(document)
            res.send(document);
        }
    });
}   

exports.getAllActiveUserRequests = (req, res) => {
    console.log(req.body);
    const obj = {
        email: req.body.email,
        $or:[
            {verificationLevel:0},
            {verificationLevel:1}
          ]
        // verificationLevel: '0'
    }
    conn.collection('request').find(obj).toArray(function (err, document) {
        if (err) {

        } else {
            console.log(document)
            res.send(document);
        }
    });
}   