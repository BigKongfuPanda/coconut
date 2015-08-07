exports.index = function (req, res, next) {
    var chatRoom = require('../model/index').ChatRoom;
    chatRoom.find({}, function (err, docs) {
        console.log(docs);
        res.render('chat/index', {
            session: req.session,
            roomList: docs
        });
    });
};

exports.createRoom = function (req, res, next) {
    var chat = require('../model/index').ChatRoom;
    var roomName = req.body.roomName;
    console.log(roomName);
    chat.create({
        roomName: roomName,
        author: '',
        password: ''
    });
    res.redirect('/chat');
};