var express = require('express');
var router = express.Router();
const newsController = require('../app/controllers/NewsControllers');

router.use('/show', newsController.show);
router.use('/', newsController.index);

module.exports = router;