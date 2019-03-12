var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/usercontroller');

router.get('/test', user_controller.test);

router.post('/create', user_controller.user_create);

router.get('/:id', user_controller.user_details);

router.put('/:id/update', user_controller.user_update);

router.delete('/:id/delete', user_controller.user_delete);

router.post('/users',user_controller.user_allUsers);

module.exports = router;