var express = require('express');
// var socket = require('socket.io');
// var path = require('path');
const bodyParser = require('body-parser');
var app = express();
// var toastr = require('express-toastr');
// const { check, validationResult } = require('express-validator');
let urlencoded = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(urlencoded);

server = app.listen(5000, function () {
    console.log('server is running on port 5000')
});

// const socket = io('http://192.168.1.227:1337');
// io = socket(server);

// io.on('connection', (socket) => {
//     console.log(socket.id);

//     socket.on('SEND_MESSAGE', function (data) {
//         validationResponse = data;
//         if (validationResponse.smiley && validationResponse.radio !== 'others' && validationResponse.message=='NULL'){
//             throw new Error('please check')}
           
//         // return res.send(validationResponse);
//         console.log(validationResponse)
//     });
    // 






// });