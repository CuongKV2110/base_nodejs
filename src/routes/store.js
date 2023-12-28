var express = require('express');
var router = express.Router();
const storeController = require('../app/controllers/StoreControllers');

router.get('/:id/edit', storeController.edit);

router.put('/:id', storeController.update);

router.get('/', storeController.index);

module.exports = router;