var express = require('express');
var router = express.Router();

var event_controller = require('../controllers/eventcontroller');

router.get('/test', event_controller.test);

router.post('/create', event_controller.event_create);

router.get('/:id', event_controller.event_details);

router.put('/:id/update', event_controller.event_update);

router.delete('/:id/delete', event_controller.event_delete);

router.post('/users',event_controller.event_allUsers);

module.exports = router;