var express = require('express');
var router = express.Router();
const libraryController = require('../app/controllers/LibraryControllers');


router.get('/create', libraryController.create);

router.post('/store', libraryController.store);

router.get('/:image', libraryController.detail);

router.get('/', libraryController.index);




module.exports = router;