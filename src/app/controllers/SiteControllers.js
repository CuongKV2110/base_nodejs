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
    
    async getListMenu(req, res, next) {
        Menu.find({}).
            then(listMenu => {

                res.send(listMenu);
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

    async createCourse(req, res, next) {
        try {
            const course = new Menu({
                type: req.body.type,
                name: req.body.name,
                detail: req.body.detail,
                price: req.body.price,
                image: req.body.image,
            });
        
            await course.save();
            res.send('success');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    }

}

module.exports = new SiteController();
