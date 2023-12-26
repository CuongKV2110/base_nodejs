const newsRouter = require('./news');
const itemRouter = require('./item');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/item', itemRouter);

    app.use('/', siteRouter);
}

module.exports = route;
