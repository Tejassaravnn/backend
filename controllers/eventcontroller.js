var Event = require('../models/eventmodel');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.event_create = function (req, res) {
    var event = new Event(
        {
            game: req.body.game,
            location: req.body.location,
            role: req.body.role,
            players_needed: req.body.players_needed
        }
    );

    event.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Event Created successfully')
    })
};

exports.event_details = function (req, res) {
    Event.findById(req.params.id, function (err, event) {
        if (err) return next(err);
        res.send(event);
    })
};

exports.event_update = function (req, res) {
    Event.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, event) {
        if (err) return next(err);
        
        Event.find({}).then(function (events) {
            res.send(events);
        });
    });
};

exports.event_delete = function (req, res) {
    Event.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted an event successfully!');
    })
};


exports.event_allUsers = function(req, res){
    Event.find({},function(err,events){
        if(err)
            return next(err);
            Event.find({}).then(function (events) {
                res.send(events);
            });
        });
    };