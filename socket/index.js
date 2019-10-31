var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {

  res.sendFile(__dirname + '/public/index.html');
});
// var clients = 0;
//           io.on('connection', function (socket) {
//             clients ++;
//             socket.emit('newclientconnect', { descripition: 'hey,hii' });
//             socket.broadcast.emit('newclientconnect', { descripition: clients + 'clients connected!' });
//             socket.on('disconnect', function () {
//               clients--;
//               socket.broadcast.emit('newclientconnect', {descripition: clients + 'clients connected' })
//             });
//           });

io.on('connection', function (socket) {
          //broadcost
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
          // for emitting events 
    // console.log('a user connected');
    // socket.on('disconnect', function () {
    //   console.log('user disconnected');
    });
    socket.on('chat message', function (msg) {
      console.log('message: ' + msg);
    });
  });
  // tutorialpoints
  // socket.on('disconnect', function () {
  //   clients--;
  //   io.socket.emit('broadcast', {descripition: clients + 'clients connected!' })
  // });

  http.listen(4000, function () {
    console.log('listening on *:4000');
  });
// });









// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){

//   res.sendFile(__dirname + '/public/index.html');
// });
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   // console.log('a user connected');
//   // socket.on('disconnect', function(){
//   //   console.log('user disconnected');
//   });
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// }); 
// http.listen(4000, function(){
//   console.log('listening on *:4000');
// });

