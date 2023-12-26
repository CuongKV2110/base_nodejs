const Menu = require('../models/Menu')
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[Get] home
    async index(req, res, next) {
        Menu.find({}).
            then(menus => {
                console.log(menus.length);
                res.render('home', {
                    menus: multipleMongooseToObject(menus)
                });
            })
            .catch(next);

    }

    //[Get] search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController();
