var express = require('express');
var router = express.Router();
const newsController = require('../app/controllers/NewsControllers');

router.get('/show', newsController.show);
router.get('/', newsController.index);

module.exports = router;
