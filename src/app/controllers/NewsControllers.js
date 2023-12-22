class NewsController {
    //[Get] news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('hehhheheh');
    }
}

module.exports = new NewsController();
