var app = require('http').createServer(),
    io = require('socket.io').listen(app);
//
//// Twilio Credentials
//var accountSid = 'AC8872a047b325c885ddc822572fb7366e';
//var authToken = '2d7efa8b8d2cf08dad71858da7c863e5';
//
////require the Twilio module and create a REST client
//var client = require('twilio')(accountSid, authToken);
//
//client.messages.create({
//	to: "+919674312780",
//	from: "+12053169608",
//	body: "debu da",
//}, function(err, message) {
//	console.log(message.sid);
//});

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
    email: String,
    mobile: String
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
