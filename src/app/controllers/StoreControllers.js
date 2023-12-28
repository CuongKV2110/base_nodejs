const Library = require('../models/Library')
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose');

class StoreController {
    //[Get] list Library
    async index(req, res, next) {
        Library.find({}).then(
            listLibrary => {
                res.render('store/list_library', {
                    listLibrary: multipleMongooseToObject(listLibrary)
                })
            }
        ).catch(next);
    }

    //[Get] store/:id/edit
    edit(req, res, next) {
        Library.findById(req.params.id)
            .then(
                library => {
                    console.log(req.params.id);
                    res.render('store/edit_library', { library: mongooseToObject(library) });
                }
            )
            .catch(next);
    }

    //[PUT] store/:id
    update(req, res, next) {
        Library.updateOne({ _id: req.params.id }, req.body)
            .then(

                () => res.redirect('/library')
            )
            .catch(next);

    }

    // create(req, res, next) {
    //     res.render('create/create');
    // }

    // async store(req, res, next) {
    //     const library = new Library({
    //         type: req.body.type,
    //         name: req.body.name,
    //         description: req.body.description,
    //         image: req.body.image,
    //         url: req.body.url,
    //         views: parseInt(req.body.views, 10),
    //     });
    //     console.log(parseInt(req.body.views, 10));
    //     await library.save().then(() => res.redirect('/library')).catch(error => { });
    // }
}

module.exports = new StoreController();
