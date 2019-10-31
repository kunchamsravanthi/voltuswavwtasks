var express = require('express');
var path = require('path');
var fs = require('fs');
const expressValidator = require('express-validator');
// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: '192.168.1.169',
//     user: 'vw-srv-0001',
//     password: 'Apple#123',
//     database: 'TestDB',
//     port: 6603
// });

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
// app.use('/res.json', express.static(__dirname + './pages'));

app.get('/', function (req, res) {
    res.sendFile('contact.html', { root: path.join(__dirname, './public') });
});
app.post('/login',function(req,res){
    res.send('welcome')
})
// app.post('/users', (req, res) => {
//     const request = req.body;
//     let male = request.male;

//    console.log(male); //returns 'on'
// });

// app.post('/users', function (req, res) {
//     var obj = {};
    // console.log(req.body);
    // res.send(req.body);

//     con.connect(function (err) {
//         if (!err) {
//             console.log("Database is connected ... nn");
//             // var sql = "INSERT INTO Users (firstname, lastname, emailid, password)  VALUES ('voltus', 'wave', 'abc@gmail.com','Apple#123')";
//             var sql = `INSERT INTO Users(firstname, lastname, emailid, password) VALUES('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${req.body.password}')`;
//             con.query(sql, function (err, result) {
//                 if (err) { throw err; }

//                 if (result) {
//                     console.log("1 record inserted");
//                     con.query("SELECT * FROM Users", function (err, result, fields) {
//                         // if any error while executing above query, throw error
//                         if (err) throw err;
//                         // if there is no error, you have the result
//                         console.log(result);
//                         res.send(result);
//                         res.redirect('/index');
//                     })
//                 }

//             });
//         } else {
//             console.log("Error connecting database ... nn", err);
//         }
//     });
//     console.log(req.body);
//     //     //   res.end(JSON.stringify(req.body));

// });
// app.get('/userslist', function (req, res) {
//     // res.sendFile('contact.html', { root: path.join(__dirname, './public') });
//     con.query("SELECT * FROM Users", function (err, result, fields) {
//         // if any error while executing above query, throw error
//         if (err) throw err;
//         // if there is no error, you have the result
//         console.log(result);
//         res.send(result);
//         res.redirect('/userslist');

//     })
// });
app.listen(4041, function () {
    console.log('listening at port 4041/users');
});


//fetching data from database
// var express = require('express');
// var app = express();
// var mysql = require('mysql');


// var con = mysql.createConnection({
//     host: '192.168.1.169',
//     user: 'vw-srv-0001',
//     password: 'Apple#123',
//     database: 'TestDB',
//     port: 6603
// });

// // con.connect();

// app.get('/users', (req, res) => {
//     res.sendFile(__dirname + "/");
//     // var obj = {};
//     //  console.log(req.body);
//     //  res.send(req.body);

//     // make to connection to the database.
//     con.connect(function (err) {
//         if (err) throw err;
//         // if connection is successful
//         con.query("SELECT * FROM Users", function (err, result, fields) {
//             // if any error while executing above query, throw error
//             if (err) throw err;
//             // if there is no error, you have the result
//             console.log(result);
//             res.send(result);
//             //   res.send(req.body);
//         });
//     });
// });
// app.listen(3002, function () {
//     console.log('Connected to port 3002/users');
// });



