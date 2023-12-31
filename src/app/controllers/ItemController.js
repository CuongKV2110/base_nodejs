const Menu = require('../models/Menu')
const { mongooseToObject } = require('../../util/mongoose');
class ItemController {

    //[Get] /item/:type
    show(req, res, next) {
        Menu.findOne({ type: req.params.type })
            .then(menu => { 
                console.log('Library name:', menu.name);
                res.render('item/show',  {menu : mongooseToObject(menu)}); 
            })
            .catch(next);

    }


}

module.exports = new ItemController(); 
