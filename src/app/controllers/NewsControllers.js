class NewsController {
    //[Get] news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.render('search');
    }
}
 
module.exports = new NewsController();
