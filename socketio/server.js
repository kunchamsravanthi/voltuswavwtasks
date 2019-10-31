const express = require('express');
const app = express();
const port= 3001;
const http = require('http').createServer(app);
const io = require ('socket.io').listen(http);
// io.on('connection',(socket)=>{
//     socket.emit('welcome hello and welcome to the socket.io server');
// console.log('voltus');
// });
const gameRooms=['rocket','csgo', 'bt1'];
io.of('/games').on('connection',(socket)=>{
    console.log('new client');
    socket.emit('hi','everyone');
    socket.on("joinRoom",(room)=>{
        if(gameRooms.includes(room)){
            socket.join(room);
            io.of('/games').in(room)
            .emit('newuser','new person has joine'+room);
            return socket.emit('success','you hv succefully joined');

        }else{
            return socket.emit('err','ERROR','No Room named'+ room);
        }
        socket.disconnect();
    })
    socket.join('room')
})

http.listen(port,()=>{
    console.log('server is listening on localhost :'+port);
});