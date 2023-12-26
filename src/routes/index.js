const newsRouter = require('./news');
const itemRouter = require('./item');
const siteRouter = require('./site');
const libraryRouter = require('./library');


function route(app) {
    
    app.use('/news', newsRouter);
    app.use('/item', itemRouter);
    app.use('/library', libraryRouter);

    app.use('/', siteRouter);
}

module.exports = route;
