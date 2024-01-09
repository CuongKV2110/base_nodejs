var express = require('express');
var router = express.Router();
const storeController = require('../app/controllers/StoreControllers');

router.get('/:id/edit', storeController.edit);

router.get('/bin', storeController.bin);

router.put('/:id', storeController.update);

router.patch('/:id/restore', storeController.restore);

router.delete('/:id', storeController.delete);

router.delete('/:id/force', storeController.forceDelete); 

router.get('/', storeController.index);

module.exports = router;