const io =require('socket.io-client');
let games = io.connect('http://localhost:3001/games');
games.on('welcome',(msg)=>{
    console.log('Received:',msg);
 });
games.emit('joinRoom','rocket');
games.on('newUser',(res)=>console.log(res));
 games.on('err',(err)=> console.log(err));
 games.on('success',(res)=>console.log(res));