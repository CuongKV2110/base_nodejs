var express = require('express');
var router = express.Router();
const itemController = require('../app/controllers/ItemController');

router.get('/:type', itemController.show);


module.exports = router;
