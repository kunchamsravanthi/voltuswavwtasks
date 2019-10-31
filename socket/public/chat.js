
// // make connection
var socket =io.connect('https://localhost:4000');

// Query Dom
var message = document.getElementById('message');
handle=document.getElementById('handle'),
btn= document.getElementById('send'),
output= document.getElementById('output');
 feedback= document.getElementById('feedback');
// // emit events
btn.addEventListener('click',function(){
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
});
// message.addEventListener('keypress',function(data){
//     socket.emit('typing',handle.value);
// })
// // listening for events

socket.on('chat',function(msg){
    output.innerHTML+='<p><strong>'+msg.handle+':</strong>'+msg.message+'</p>';
});
// socket.on('typing',function(msg){
//     feedback.innerHTML='<p><em>'+msg+'is typing a message...</em></p>';
// })