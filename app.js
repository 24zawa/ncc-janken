var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 7000;

//publicを使えるようにする
app.use(express.static(path.join(__dirname, 'public')));

app.get('/' , function(req, res){
    res.sendFile(__dirname+'/index.html');
});

io.on('connection',function(socket){

    //受け取ったとき
    socket.on('message',function(msg){
        console.log('message: ' + msg);
    });
});

http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
});