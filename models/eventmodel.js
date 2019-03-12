var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
   /* event:[{ */
    game: {type: String, required: true, max: 100},
    location: {type: String, required: true, max: 100},
    time: {type: String, required: true},
    role: {type: String, required: false, max: 100},
    players_needed: {type: String, required: true},
    count:{type: String, required: false}
    /* }] */
});

module.exports = mongoose.model('realevent1', EventSchema);