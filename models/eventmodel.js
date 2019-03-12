var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
   /* event:[{ */
    game: {type: String, required: true, max: 100},
    location: {type: String, required: true, max: 100},
    role: {type: String, required: true, max: 100},
    players_needed: {type: String, required: true},
    /* }] */
});


/* module.exports = mongoose.model('realevent', EventSchema); */
module.exports = mongoose.model('realevent1', EventSchema);