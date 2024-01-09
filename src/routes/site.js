var express = require('express');
var router = express.Router();
const siteController = require('../app/controllers/SiteControllers');

router.get('/search', siteController.search);
router.get('/:id/edit', siteController.detail);
router.put('/:id', siteController.update);
router.get('/list_menu', siteController.getListMenu);
router.post('/create_course', siteController.createCourse);
router.get('/', siteController.index);

module.exports = router;
