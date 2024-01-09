const Library = require('../models/Library')
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose');

class StoreController {
    //[Get] list Library
    async index(req, res, next) {
        Promise.all([Library.find({}), Library.countDocumentsDeleted()])
            .then(([listLibrary, deletedCount]) => {
                res.render('store/list_library', {
                    deletedCount,
                    listLibrary: multipleMongooseToObject(listLibrary)
                })
            })
            .catch(next);

    }

    bin(req, res, next) {
        Library.findDeleted({})
            .then((listLibrary) => {
                console.log('List of deleted libraries:', listLibrary);
                res.render('store/bin_library', {
                    listLibrary: multipleMongooseToObject(listLibrary)
                });
            })
            .catch((error) => {
                console.log('Error:', error);
                res.status(500).send('Internal Server Error');
            });
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

    restore(req, res, next) {
        console.log('A');
        Library.restore({ _id: req.params.id })
            .then(
                () => res.redirect('/store')
            )
            .catch(next);
    }

    delete(req, res, next) {
        Library.delete({ _id: req.params.id })
            .then(
                () => res.redirect('back')
            )
            .catch(next);

    }

    forceDelete(req, res, next) {
        Library.deleteOne({ _id: req.params.id })
            .then(
                () => res.redirect('back')
            )
            .catch(console.log('heheh'));

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
