var app = require('http').createServer(),
    io = require('socket.io').listen(app);

app.listen(3702);

var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
    // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/chatDB');


var allUsers = [];
var allSockets = [];

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    pass: String,
    email: String
});
var userModel = mongoose.model('user', userSchema);

io.sockets.on('connection', function (socket) {
    console.log('New User connected');
    allSockets.push(socket);

    socket.on('signUp', function (userData) {
        allUsers.push(userData);
        console.log('Signed');

        userModel.findOne({email: userData.user.email}, function (err, doc) {
            if(!err && doc){
                socket.emit('userExist');
            }
            else if (!doc && !err) {
                var user = new userModel(userData.user);

                user.save(function (err, user) {
                    if (err) return console.error(err);
                    else{
                        socket.emit('signInSuccess');
                    }
                });
            }
        });

    });
    socket.on('disconnect', function (data) {
        var disconnectedUserIndex = allSockets.indexOf(socket);
        allSockets.splice(disconnectedUserIndex, 1);
    });
});
