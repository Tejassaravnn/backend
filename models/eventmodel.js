var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    game: {type: String, required: true, max: 100},
    location: {type: String, required: true, max: 100},
    time: {type: String, required: true},
    role: {type: String, required: true, max: 100},
    players_needed: {type: String, required: true},
    // count:{type: String, required: true}
});

module.exports = mongoose.model('realevent1', EventSchema);