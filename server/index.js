var users = 0;


const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
   users++
   if(users ==1){
   }
   else if(users ==2){
   }
   else if(users >2){
   }
   
    console.log('a user connected');

    socket.on('message', (message) =>     {
        console.log(message);
        io.emit('message', message);   
    });
});

http.listen(8080, () => console.log('listening on http://localhost:8080') );



 
