const Library = require('../models/Library')
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose');

class LibraryController {
    //[Get] list Library
    async index(req, res, next) {
        Library.find({}).then(
            listLibrary => {
                res.render('library', {
                    listLibrary: multipleMongooseToObject(listLibrary)
                })
            }
        ).catch(next);
    }


    detail(req, res, next) {
        Library.findOne({ type: req.params.type })
            .then(
                library => {

                    res.render('item/show', { library: mongooseToObject(library) });
                }
            )
            .catch(next);
    }

    create(req, res, next) {
        res.render('create/create');
    }

    store(req, res, next) {
        console.log(req.body);
        const library = new Library({
            type: req.body.type,
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            url: req.body.url,
            views: parseInt(req.body.views, 10),
        });
        console.log(parseInt(req.body.views, 10));
        library.save().then(() => res.redirect('/')).catch(error => { });
    }


}

module.exports = new LibraryController();
