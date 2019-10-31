var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var mysql = require('mysql');
var bodyParser = require('body-parser');
var con = mysql.createConnection({
    host: '192.168.1.169',
    user: 'vw-srv-0001',
    password: 'Apple#123',
    database: 'TestDB',
    port: 6603
});
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (client) {
    console.log('Client connected...');

    if (client.on('join', function (data) {
        console.log(data);
        con.connect(function (err,data) {
                if (!err) {
                    // console.log("Database is connected ... nn");
                    // var sql = "INSERT INTO Users (firstname, lastname, emailid, password)  VALUES ('voltus', 'wave', 'abc@gmail.com','Apple#123')";
                    var sql = `INSERT INTO Register(firstname, lastname, emailid, password) VALUES('${data.firstname}', '${data.lastname}', '${data.email}', '${data.password}')`;
                    con.query(sql, function (err, result) {
                        if (err) { throw err; }
        
                        if (result) {
                            console.log("result");
                            // console.log("1 record inserted");
                            // con.query("SELECT * FROM Register", function (err, result, fields) {
                            //     // if any error while executing above query, throw error
                            //     if (err) throw err;
                            //     // if there is no error, you have the result
                            //     console.log(result);
                            //     // res.send(result);
        
                            // })
                        }
        
                    });
                } else {
                    console.log("Error connecting database ... nn", err);
                }
            });
      
    }));

    client.on('messages', function (data) {
        client.emit('broad', data);
        client.broadcast.emit('broad', data);
    });

});
// .listen();
server.listen(4200, function () {
    console.log('Connected to port 4200/users');
});