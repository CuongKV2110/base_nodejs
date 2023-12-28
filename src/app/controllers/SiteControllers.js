const Menu = require('../models/Menu')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[Get] home
    async index(req, res, next) {
        Menu.find({}).
            then(menus => {

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

    detail(req, res, next) {
        Menu.findOne({ _id: req.params.id })
            .then(
                menu => {
                    res.render('menu/edit_menu', { menu: mongooseToObject(menu) });
                }
            )
            .catch(next);
    }

    update(req, res, next) {
        Menu.updateOne({ _id: req.params.id }, req.body)
            .then(
                () => res.redirect('/')
            )
            .catch(next);
    }

}

module.exports = new SiteController();
