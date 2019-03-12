var User = require('../models/usermodel');

exports.test = function (req, res) {
    res.send('Greetings from the ?/User/Test controller!');
};

exports.user_create = function (req, res) {
    var user = new User({
        login: req.body.login,
        password: req.body.password
    });
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Login details created successfully')
    })
};

exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, function (err, user) {
        if (err) return next(err);

        User.find({}).then(function (users) {
            res.send(users);
        });
    });
};

exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted an user successfully!');
    })
};

exports.user_allUsers = function (req, res) {
    User.find({}, function (err, users) {
        if (err)
            return next(err);
        res.send(users);
    });
};