const Library = require('../models/Library')
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose');

class LibraryController {
    //[Get] list Library
    async index(req, res, next) {
        console.log("HIC");
        Library.find({}).then(
            listLibrary => {
                res.render('library', {
                    listLibrary: multipleMongooseToObject(listLibrary)
                })
            }
        ).catch(next);
    }

    detail(req, res, next) {
        Library.findOne({ image: req.params.image })
            .then(
                library => {
                    console.log(library);
                    res.render('item/library_detail', { library: mongooseToObject(library) });
                }
            )
            .catch(next);
    }

    create(req, res, next) {
        res.render('create/create');
    }

    async store(req, res, next) {
        try {
            const library = new Library({
                type: req.body.type,
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                url: req.body.url,
                views: parseInt(req.body.views, 10),
            });
            console.log(parseInt(req.body.views, 10));
            await library.save();
            res.redirect('/library');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new LibraryController();
